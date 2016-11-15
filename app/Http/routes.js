'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')

//:Users can sign up and login.---------------------------/
Route.post('/users', 'UserController.register')
Route.post('/login', 'UserController.create')
//-----------------------------------------------------------------------------------------

//;Logged in users can submit links with at least a title and destination (url)
Route.post('users/:id/links', 'LinkController.create').middleware('auth')
//:Any user can retrieve the links ordered most recent to least recent.
Route.get('/users/:id/links','LinkController.index')
//-----------------------------------------------------------------------------------------

//Logged in users can add comments on any link.
Route.post('links/:id/comments','CommentController.add').middleware('auth')
//Any user can retrieve the comments for a given link.
Route.get('/links/:id/comments','CommentController.show')

