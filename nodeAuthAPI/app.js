const express = require("express");
const jwt = require("jsonwebtoken");;

const app =express();
const PORT = 8000;

app.use(express.json());

app.get("/api",(req,res) =>{
    res.status(200).json({
        message: "Welcome to the API",
    })
})

app.post("/api/posts", verifyToken, (req,res)=>{
    jwt.verify(req.token, "secretkey", (err,authData)=>{
        console.log(req.token);
        if(err){
            console.log("hellow")
            res.status(404).json({
                message: "Forbidden",
            })
        }
        else{
            res.status(200).json({
                message: "Post created",
                authData
            })
        }
    })
})

app.post("/api/login", (req,res)=>{
    //Mock User 
    const user={
        id: 1,
        username: "Shikhar",
        email: "fjghrwiohgior@gmail.com"
    }
    jwt.sign({user: user}, "secretkey",{expiresIn: "5m"}, (err,token) =>{
        res.status(200).json({
            token
        })
    })
    //callback function to perfotm the action asynchrnously
})

//Format of Token
//Authorization: Bearer <access_token>

//verifyToken
function verifyToken(req,res,next){
    //Get the auth header value
    let bearerHeader = req.headers.Authorization || req.headers.authorization;

    //check if bearer is undefined
    console.log(bearerHeader);
    if(bearerHeader && bearerHeader.startsWith("Bearer")){
        //split at the space
        const bearer = bearerHeader.split(' ');
        //take the token from the array
        const bearerToken = bearer[1];
        //set the token
        req.token = bearerToken;
        //call the next middleware
        next();
    }
    else{
        //Forbidden
        res.status(403).json({
            message: "Forbidden",
        })
    }
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});