const { User, Appointment } = require('../models')
// const { Sequelize } = require('sequelize')

class DashboardController {
  async index (req, res) {
    const providers = await User.findAll({ where: { provider: true } })

    const { user } = req.session
    const appointments = await Appointment.findAll({
      where: { provider_id: user.id },
      include: ['user']
    })
    return res.render('dashboard', { providers, appointments })
  }
}

module.exports = new DashboardController()
