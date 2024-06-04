const notFound = (req,res,next) =>{
    res.status(404).send("<h1>Route not found</h1>");
    next()
}

module.exports = notFound;