'use strict'

const User = use('App/Model/User')
const Link = use('App/Model/Link')

class LinkController {

	* index (request,response){
		let user_id = request.param('id')
		let user = yield User.find(user_id)
		let userLinks = yield user.links().orderBy('user_id','desc')

		response.json(userLinks)


	}

    * create (request, response) {
		let data = request.only('title', 'url')
		data.user_id = request.authUser.id
		let link = yield Link.create(data)

		response.json(link)
	}


}

module.exports = LinkController
