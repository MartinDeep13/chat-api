'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('/salas', 'ChatController.allSalas');
Route.post('/sala', 'ChatController.saveSala')
Route.post('/get-sala', 'ChatController.getSala')
Route.post('/user', 'ChatController.saveUser')
Route.post('/get-user', 'ChatController.getUser')
Route.post('/get-username', 'ChatController.getUsername')
Route.post('/messages', 'ChatController.messagesFromSalas');
Route.post('/new-message', 'ChatController.saveMessage');
