const notFoundError = (req, res, next) => {
    const error = new error( `Not found - ${ req.originalUrl }` )
    res.statut( 400 )
    next(error)
}

module.exports = notFoundError