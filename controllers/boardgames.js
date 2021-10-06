const Boardgame = require('../models/boardgame')

exports.getBoardgames = (req, res) => {
    const boardgames = Boardgame.find().select("_id name yearPublished image minPlayers maxPlayers playingTime")
    .then((boardgames) => {
        res.json({ boardgames })
    })
    .catch(err => console.log(err))
}

exports.createBoardgame = (req, resp) => {
    const boardgame = new Boardgame(req.body)
    boardgame.save()
    .then(result => {
        resp.json({
            boardgame: result
        })
    })
}
