const User = require('../../models/user');
const jwt = require('jsonwebtoken');

exports.usersList = (req,res) => {
    // const token = req.headers.authorization.split(" ")[1];
    // const user = jwt.verify(token, process.env.JWT_SECRET);
    // req.user = user;
    User.find()
    .then(user => {
        // res.send(user);
        res.status(200).json({user:user});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving user."
        });
    });
} 