const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
  "postgres://ozeqiunwlsjqxz:e448b826cb325f0407265dee7565f6b034a547b46e0e175fd40bd240c0f98deb@ec2-18-234-17-166.compute-1.amazonaws.com:5432/dfg88nqh87ct35",
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
)

module.exports = sequelize