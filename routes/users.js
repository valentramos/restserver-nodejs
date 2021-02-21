const { Router } = require('express');

const { usersGet, 
        usersPut, 
        usersPost, 
        usersDelete } = require('../controllers/users');

const router = Router();

router.get('/', usersGet);

router.post('/', usersPost);

router.put('/:userid', usersPut);

router.delete('/', usersDelete);

module.exports = router;