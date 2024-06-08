const path = require("path");
const express = require("express");
const dotenv = require('dotenv').config();
const multer = require("multer");
const { errorHandler } = require("./middleware/errorHandler");
const e = require("express");
const { Console } = require("console");

const port = process.env.PORT || 8000;

const app = express();
// const upload = multer({ dest: "uploads/" }); 
const storage = multer.diskStorage({
    destination: function (req, file, cb) { //where file will be stored
        return cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`);
    }

})

const upload = multer({ storage});

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("homepage");
})

app.post("/upload", upload.fields([{name: "profileImage"}, {name: "resume"}]), (req, res) => {
    console.log(req.body);
    console.log(req.file)

    return res.redirect("/");
})

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}
start()