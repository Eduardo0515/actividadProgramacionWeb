'use strict'
//const Materia = use('App/Models/Materia');
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

/*Route.get('materias',async({response})=>{
    const materias = await Materia.all();
    response.send(materias);
});*/

Route.get('materias','MateriaController.index');
Route.get('materias/ver/:id','MateriaController.show');
Route.get('materias/crear','MateriaController.create')
Route.post('materias/crear','MateriaController.store')
Route.get('materias/editar/:id','MateriaController.edit');
Route.post('materias/editar/:id','MateriaController.update');
Route.get('materias/eliminar/:id','MateriaController.destroy');
Route.get('materias/volver','MateriaController.volver');
////////////////////////////////////////////////////////////////////////////////////////////////////////////
Route.get('alumnos','AlumnoController.index');
Route.get('alumnos/ver/:id','AlumnoController.show');
Route.get('alumnos/crear','AlumnoController.create')
Route.post('alumnos/crear','AlumnoController.store')
Route.get('alumnos/editar/:id','AlumnoController.edit');
Route.post('alumnos/editar/:id','AlumnoController.update');
Route.get('alumnos/eliminar/:id','AlumnoController.destroy');
Route.get('alumnos/volver','AlumnoController.volver');
////////////////////////////////////////////////////////////////////////////////////////////////////////////
Route.get('registros','RegistroController.index');
Route.get('registros/crear','RegistroController.create');
Route.post('registros/crear','RegistroController.store');
Route.get('registros/ver/:id','RegistroController.show');
Route.get('registros/editar/:id','RegistroController.edit');
Route.post('registros/editar/:id','RegistroController.update');
Route.get('registros/eliminar/:id','RegistroController.destroy');
Route.get('registros/volver','RegistroController.volver');
////////////////////////////////////////////////////////////////////////////////////////////////////////////
Route.get('calificacions','CalificacionController.index');
Route.get('calificacions/crear/:id','CalificacionController.create');
Route.post('calificacions/crear','CalificacionController.store');
Route.get('calificacions/ver/:id','CalificacionController.show');
Route.get('calificacions/editar/:id','CalificacionController.edit');
Route.post('calificacions/editar/:id','CalificacionController.update');
Route.get('calificacions/eliminar/:id','CalificacionController.destroy');
Route.get('calificaciones/volver','CalificacioneController.volver');
