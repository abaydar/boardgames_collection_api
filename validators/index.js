exports.createBoardgameValidator = (req, resp, next) => {
    
    req.check("name", "Provide name of boardgame").notEmpty()
    req.check("yearPublished", "Provide year published").notEmpty()
    req.check("image", "Provide image URL").notEmpty()
    req.check("minPlayers", "Provide minimum number of players").notEmpty()
    req.check("maxPlayers", "Provide maximum number of players").notEmpty()
    req.check("playingTime", "Provide approximate playing time in minutes").notEmpty()

    //check for errors
    const errors = req.validationErrors()
    //if error, show the first one as they happen
    if (errors) {
        const firstError = errors.map((e) => e.msg)[0]
        return resp.status(400).json({error: firstError})
    }
    //proceed to next middleware
    next()    
}