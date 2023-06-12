const express = require("express");

const {connection } = require("./Config/db")
const {userRouter} = require("./Routes/User.routes")
const {postRouter} = require("./Routes/Post.routes")
const {Auth} = require
const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use(Auth);
app.use("/posts", postRouter)

app.listen(process.env.PORT, async()=>{
    try{

    } catch(error){
        console.log(error);
        console.log("Something wrong!");
    }
}) ;