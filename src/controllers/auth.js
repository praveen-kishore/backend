const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

exports.signup = (req,res) => {
    User.findOne({email:req.body.email})
    .exec((error,user)=> {
        if(user) return res.status(400).json({
            message:'User Already registered'
        });

        const {
            firstName,lastName,email,password
        } = req.body;
        const _user = new User({firstName,lastName,email,password,username:Math.random().toString()});
        
        _user.save((error,data)=>{
            if(error){
                return res.status(400).json({
                    message: 'Something went wrong'
                });
            }
            if(data){
                return res.status(201).json({
                    // user: data
                    message: 'User Created Successfully.'
                });
            }
        });
    });
}

exports.signin = (req,res) => {
    User.findOne({email:req.body.email}).exec((error,user) => {
        if(error) return res.status(400).json({error:'Server Error'});
        if(user){
            if(user.authenticate(req.body.password, this.hash_password)){
                console.log(req.body.password);
                const token = jwt.sign({_id:user.id},process.env.JWT_SECRET,{expiresIn:'1h'});
                const {_id,firstName,lastName,email,role,fullName} = user;
                res.status(200).json({
                    token,
                    user: {
                        _id,firstName,lastName,email,role,fullName
                    }
                });
            }else{
                return res.status(400).json({message:'Invalid Password'});
            }
        }else{
            return res.status(400).json({message:'Something went wrong'});
        }
    });
}

exports.profile = (req,res,next) => {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    res.status(200).json({user:'profile'});
    // next();
}