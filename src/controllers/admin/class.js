const Class = require('../../models/class');
const jwt = require('jsonwebtoken');

exports.classes = (req,res) => {
    // const token = req.headers.authorization.split(" ")[1];
    // const user = jwt.verify(token, process.env.JWT_SECRET);
    // req.user = user;
    Class.find().then(
        (classes) => {
            res.status(200).json(classes);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

exports.classAdd = (req,res) => {
    
    const classSave = new Class({
        title:      req.body.title,
        service:    req.body.service,
        class_by:   req.body.class_by,
        image:      req.body.image
    });
    classSave.save().then(
        () => {
            res.status(201).json({
                message: 'Class created successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

exports.classEdit = (req,res) => {
    Class.findOne({
        _id: req.params.id
    }).then(
        (classes) => {
            res.status(200).json(classes);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
}

exports.classUpdate = (req,res) => {
    const updateClass = new Class({
        _id:        req.params.id,
        title:      req.body.title,
        service:    req.body.service,
        class_by:   req.body.class_by
    });
    Class.updateOne({_id: req.params.id}, updateClass).then(
        () => {
            res.status(201).json({
                message: 'Class updated successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

exports.classDelete = (req,res) => {
    Class.deleteOne({_id: req.params.id}).then(
        () => {
            res.status(200).json({
                message: 'Class Delete Deleted!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}
