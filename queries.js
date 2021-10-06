const Pool = require('pg').Pool
const dotenv = require('dotenv')
dotenv.config()

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: 'localhost',
  database: 'boardgamesapi',
  password: process.env.DB_PASSWORD,
  port: 5432,
})

exports.getBoardgames = (request, response) => {
    pool.query('SELECT * FROM boardgames ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }