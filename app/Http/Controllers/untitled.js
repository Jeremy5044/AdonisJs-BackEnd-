 /*

   * add (request, response) {
   	 let data = response.only('title', 'url')
	 let link = Link.create(data)
	 link.user_id = request.authUser.id
   }

  Route.post('/comments')
  Route.post('/links/:id/comments', 'CommentController.add')
 */



