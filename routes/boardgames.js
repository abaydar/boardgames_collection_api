const express = require('express')
const { getBoardgames, createBoardgame } = require('../controllers/boardgames')
const { createBoardgameValidator } = require('../validators')

const router = express.Router()

router.get('/', getBoardgames)
router.post('/boardgames', createBoardgame)

module.exports = router