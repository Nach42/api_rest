'use strict'

const config = require('./config')
const mongoose = require('mongoose')
const app = require('./app')

mongoose.connect(config.db, (err, res) => {
	if (err) {
		return console.log(`Error al conecta a la base de datos: ${err}`)
	}
	console.log('Conexión a la base de datos establecida')
	
	app.listen(config.port, () =>{
		console.log(`API REST corriendo en http://localhost:${config.port}`)
	})
})