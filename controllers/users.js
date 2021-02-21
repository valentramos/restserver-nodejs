const usersGet = (req, res) => {
    res.status(403).json({
        msg: 'get API - Controller'
    });
}

const usersPost = (req, res) => {
    res.status(201).json({
        msg: 'post API - Controller'
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