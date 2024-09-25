const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
process.env.DATABASE_NAME, // Database name
  process.env.DATABASE_USER, // User
  process.env.DATABASE_PASSWORD, // Password
  {
    host: process.env.DATABASE_HOST, // Host
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
