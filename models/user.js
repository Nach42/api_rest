'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = Schema({
	email: {type: String, unique: true, lowercase: true},
	password: String,
	name: String,
	role: {type: String, default: 'USER', enum: ['ADMIN', 'USER']}
})

module.exports = mongoose.model('User', UserSchema)