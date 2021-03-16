const User = require('../models/user');
const bcryptjs = require('bcryptjs');

const usersGet = (req, res) => {
    res.status(403).json({
        msg: 'get API - Controller'
    });
}

const usersPost = async(req, res) => {

    const { name, email, password, rol } = req.body;
    const user = new User({ name, email, password, rol });

    const validateEmail = await User.findOne({ email });
    if (validateEmail) {
        return res.status(400).json({
            msg: 'El correo ya esta registrado'
        });
    }

    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync( password, salt );

    await user.save();

    res.status(201).json({
        msg: 'post API - Controller',
        user
    });
}

const usersPut = (req, res) => {
    const { userid } = req.params;
    res.status(500).json({
        msg: 'put API - Controller',
        userid
    });
}

const usersDelete = (req, res) => {
    res.json({
        msg: 'delete API Controller'
    });
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
}       