const express = require("express")
const {connection} = require("./Config/db")
const {userController} = require("./routes/user.routes")
const {authentication} = require("./middlewares/authentication")
const {todosController} = require("./routes/todos.routes")
const cors = require("cors")


const app = express();
const PORT = 8080
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Welcome to Home page")
})
app.use(cors())

app.use("/user", userController)
app.use(authentication)
app.use("/todo", todosController)

app.listen(PORT, async () => {
    try{
        await connection;
        console.log("Connected to database")
    }
    catch(err){
        console.log("something went wrong for database")
        console.log(err)
    }
    console.log(`http://localhost:${PORT}`)
})