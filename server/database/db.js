const sequelize = require('./sequelize')

const connect = async () => {
  try {
    await sequelize.authenticate()
    console.log("Connection to Database Succeeded!")
  } catch (error) {
    console.error("Cannot connect to Database")
  }
}

module.exports = connect