const knex = require("../database/knex");

class MovieTagsController {
  async index(request, response) {
    const user_id  = request.user.id;

    const movieTags = await knex("movieTags")
      .where({ user_id })
    return response.json(movieTags);
  }
}

module.exports = MovieTagsController;