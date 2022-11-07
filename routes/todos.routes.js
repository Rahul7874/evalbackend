const {Router} = require("express")
require("dotenv").config()

const {TodoModel} = require("../models/Todo.model.js")

const todosController = Router();


todosController.get("/", async (req, res) => {
    // const {tag} = req.query
    const todo = await TodoModel.find({userId : req.body.userId})
    res.send(todo)
})


todosController.post("/create", async (req, res) => {
    const {taskname, status, tag, userId} = req.body;
    const todo = new TodoModel({
        taskname,
        status,
        tag,
        userId
    })
    try{
        await todo.save()
        res.send("Todo list created")
    }
    catch(err){
        res.send("something went wrong")
    }
})


todosController.delete("/delete/:todoId", async (req, res) => {
    const {todoId} = req.params
    const deletedTodo = await TodoModel.findOneAndDelete({_id : todoId, userId : req.body.userId})
    if(deletedTodo){
        res.status(200).send("Deleted")
    }
    else{
        res.send("couldn't delete")
    }
})

todosController.patch("/edit/:todoId", async (req, res) => {
    const {todoId} = req.params
    const deletedTodo = await TodoModel.findOneAndUpdate({_id : todoId, userId : req.body.userId},req.body)
    if(deletedTodo){
        res.send("Deleted")
    }
    else{
        res.send("couldn't delete")
    }
})


module.exports = {
    todosController
}