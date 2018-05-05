'use strict'

const express = require('express')
const userCtrl = require('../controllers/user') 
const api = express.Router()

api.get('/users', userCtrl.getUsers)
api.get('/users/:user_id', userCtrl.getUser)
api.get('/signin', userCtrl.signIn)
api.post('/users', userCtrl.postUser)
api.put('/users/:user_id', userCtrl.updateUser)
api.delete('/users/:user_id', userCtrl.deleteUser)

module.exports = api