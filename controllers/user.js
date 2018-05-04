'use strict'

const User = require('../models/user')

function getUsers(req, res){
	User.find({}, (err, users) => {
		if(err) return res.status(500).send({message: `Error al procesar la peticion: ${err}`})
		if(!users) return res.status(404).send({message: `No existen usuarios`})

		res.status(200).send({users: users})
	})
}

function getUser(req, res){
	let user_id = req.params.user_id
	User.findById(user_id, (err, user) => {
		if(err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
		if(!user) return res.status(404).send({message: `El usuario no existe`})

		res.status(200).send({user: user})
	})
}

function postUser(req, res){
	let user = new User()
	user.username = req.body.username
	user.email = req.body.email
	user.password = req.body.password
	user.name = req.body.name
	if (req.body.role == 'ADMIN') user.role = req.body.role

	user.save((err, userStored) => {
		if(err) return res.status(500).send({message: `Error al registrar usuario, ${err}`})

		res.status(200).send({user: userStored})
	})
}

function updateUser(req, res){
	let user_id = req.params.user_id
	let update = req.body

	User.findByIdAndUpdate(user_id, update, (err, userUpdated) => {
		if(err) return res.status(500).send({message: `Error al actualizar el usuario: ${err}`})

		res.status(200).send({user: userUpdated})
	})
}

function deleteUser(req, res){
	let user_id = req.params.user_id
	User.findById(user_id, (err, user) => {
		if(err) return res.status(500).send({message: `Error al borrar el usuario: ${err}`})
		if(!user) return res.status(404).send({message: `El usuario no existe`})
		
		user.remove(err => {
			if(err) return res.status(500).send({message: `Error al borrar el usuario: ${err}`})
			res.status(200).send({message: 'Usuario eliminado con exito'})
		})
	})
}

module.exports = {
	getUsers,
	getUser,
	postUser,
	updateUser,
	deleteUser
}