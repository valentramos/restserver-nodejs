const { Router } = require('express');
const { check } = require('express-validator');
const Role = require('../models/role');

const { validateFields } = require('../middlewares/validate-fields');

const { usersGet,
	usersPut,
	usersPost,
	usersDelete } = require('../controllers/users');

const router = Router();

router.get('/', usersGet);

router.post('/', [
	check('name', 'El nombre es obligatorio').not().isEmpty(),
	check('password', 'La contraseña debe tener más de 6 caracteres').isLength({ min: 6 }),
	check('email', 'El correo no es válido').isEmail(),
	// check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
	check('rol').custom(async (rol = '') => {
		const existsRol = await Role.findOne({ rol });
		if (!existsRol) {
			throw new Error(`El rol ${rol} no está registrado en la BD`)
		}
		// TE QUEDASTE EN LA CLASE 125
	}),
	validateFields
], usersPost);

router.put('/:userid', usersPut);

router.delete('/', usersDelete);

module.exports = router;