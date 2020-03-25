const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const ongs = await connection('ongs').select('*');
    return res.json(ongs);
  },

  async store(req, res) {
    const { name, email, phone, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString('hex');

    await connection('ongs').insert({
      id,
      name,
      email,
      phone,
      city,
      uf
    })

    return res.json({ id })
  },

  async delete(req, res) {
    const { id } = req.params;

    connection('ongs').delete()
  }
}