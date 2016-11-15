'use strict'

const Hash = use('Hash')

const User = use('App/Model/User')

class UserController {

	* register (request,response){
      	let data = request.only('email','username','password') 
      	data.password = yield Hash.make(data.password)

      	let user = yield User.create(data)

  	    response.status(201).json(user)
	
		

	}

	* create(request,response){
		let data = request.only('username','password')
		 let user= yield User.findBy('username',data.username)
		 console.log(user)	

		 try{
		 	let verify = yield Hash.verify(data.password,user.password)
		 	console.log(verify)
		 	if (!verify){ throw new Error();}

		 	let token = yield request.auth.generate(user)
		 	user.access_token = token

		 	response.json(user)
		   }catch (error){
		   	response.status(401).json({error:"Unidentified user or password"})

		 }
		
	}

}

module.exports = UserController
