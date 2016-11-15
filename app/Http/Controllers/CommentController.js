'use strict'

const Link =use("App/Model/Link")
const Comment=use("App/Model/Comment")

class CommentController {
	  
	  * add (request, response) {
   	 let data = request.only('comment')
	 data.user_id = request.authUser.id
	let comment = yield Comment.create(data)
	

    response.status(201).json(comment)
   }
   * show (request,response){

   	let linkId =request.param('id')
   	let link = yield Link.find(linkId)
   	let comments = yield link.comments()
   
   response.json(comments)
   }

}

module.exports = CommentController
