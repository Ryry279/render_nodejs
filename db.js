const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
process.env.DATABASE.NAME, // Database name
  process.env.DATABASE.USER, // User
  process.env.DATABASE.PASSWORD, // Password
  {
    host: process.env.DATABASE.HOST, // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
