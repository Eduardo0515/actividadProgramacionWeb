'use strict'
const Alumno = use('App/Models/Alumno');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with alumnos
 */
class AlumnoController {
  /**
   * Show a list of all alumnos.
   * GET alumnos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
      let alumnos = await Alumno.all();
      return view.render('alumnos.index',{alumnos:alumnos.toJSON()});
  }

  /**
   * Render a form to be used for creating a new alumno.
   * GET alumnos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    return view.render('alumnos.create')
  }

  /**
   * Create/save a new alumno.
   * POST alumnos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    console.log(request.all());
    await Alumno.create(request.all());
    return response.redirect('/alumnos')
  }

  /**
   * Display a single alumno.
   * GET alumnos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let alumno = await Alumno.find(params.id);
    return view.render('alumnos.show',{alumno:alumno})

  }

  /**
   * Render a form to update an existing alumno.
   * GET alumnos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let alumno = await Alumno.find(params.id)
    return view.render('alumnos.edit',{alumno:alumno});
  }

  /**
   * Update alumno details.
   * PUT or PATCH alumnos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let alumno = await Alumno.find(params.id)
    alumno.merge(request.all())
    await alumno.save();
    return response.redirect('/alumnos')
  }

  /**
   * Delete a alumno with id.
   * DELETE alumnos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let alumno = await Alumno.find(params.id)
    alumno.delete();
    return response.redirect('/alumnos')
  }

  async volver ({ params, request, response }) {
    return response.redirect('/alumnos')
  }
}

module.exports = AlumnoController
