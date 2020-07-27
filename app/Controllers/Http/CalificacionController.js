'use strict'
const Calificacion = use('App/Models/Calificacion');
const Registro = use('App/Models/Registro');
const Materia = use('App/Models/Materia');
const Alumno = use('App/Models/Alumno');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with calificacions
 */
class CalificacionController {
  /**
   * Show a list of all calificacions.
   * GET calificacions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let calificacions = await Calificacion.query().with('registro.alumno').with('registro.materia').fetch();
    return view.render('calificacions.index',{calificacions:calificacions.toJSON()});
  }

  /**
   * Render a form to be used for creating a new calificacion.
   * GET calificacions/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({params, request, response, view }) {
    //let registros = await Registro.query().with('alumno').with('materia').fetch();
    //let registros = await Registro.query().with('alumno').where('idMateria',params.id).first();
    //return view.render('calificacions.create',{registros:registros});
  }

  /**
   * Create/save a new calificacion.
   * POST calificacions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single calificacion.
   * GET calificacions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing calificacion.
   * GET calificacions/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let calificacion = await Calificacion.find(params.id);
    let idR = calificacion.idRegistro
    let registro = await Registro.find(idR);
    let alumno = await Alumno.find(registro.idAlumno);
    let materia = await Materia.find(registro.idMateria);
    console.log(registro.idAlumno)
    return view.render('calificacions.edit',{calificacion:calificacion,alumno:alumno,materia:materia,registro:registro})
  }

  /**
   * Update calificacion details.
   * PUT or PATCH calificacions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let calificacion = await Calificacion.find(params.id)
    calificacion.merge(request.all())
    await calificacion.save();
    return response.redirect('/calificacions')
  }

  /**
   * Delete a calificacion with id.
   * DELETE calificacions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let calificacion = await Calificacion.find(params.id)
    calificacion.delete();
    return response.redirect('/calificacions')
  }
}

module.exports = CalificacionController
