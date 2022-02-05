const Service = require('../../models/Service');
const jwt = require('jsonwebtoken');

exports.Servicees = (req,res) => {
    // const token = req.headers.authorization.split(" ")[1];
    // const user = jwt.verify(token, process.env.JWT_SECRET);
    // req.user = user;
    Service.find().then(
        (Servicees) => {
            res.status(200).json(Servicees);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

exports.ServiceAdd = (req,res) => {
    
    const ServiceSave = new Service({
        title:      req.body.title,
        service:    req.body.service,
        service_by:   req.body.service_by,
        image:      req.body.image
    });
    ServiceSave.save().then(
        () => {
            res.status(201).json({
                message: 'Service created successfully!'
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

exports.ServiceEdit = (req,res) => {
    Service.findOne({
        _id: req.params.id
    }).then(
        (Servicees) => {
            res.status(200).json(Servicees);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
}

exports.ServiceUpdate = (req,res) => {
    const updateService = new Service({
        _id:        req.params.id,
        title:      req.body.title,
        service:    req.body.service,
        Service_by:   req.body.Service_by
    });
    Service.updateOne({_id: req.params.id}, updateService).then(
        () => {
            res.status(201).json({
                message: 'Service updated successfully!'
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

exports.ServiceDelete = (req,res) => {
    Service.deleteOne({_id: req.params.id}).then(
        () => {
            res.status(200).json({
                message: 'Service Delete Deleted!'
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
