const mongoose = require("mongoose")


const todoSchema = new mongoose.Schema({
    taskname : {type : String, required : true},
    // status:{default:false},
    // tag :{enum :["personal","family","professsnatiol"],required : true},
    status:{type:String,required:true},
    tag:{type:String,required:true},
    userId : {type : String, required : true}
    
})

const TodoModel = mongoose.model("todo", todoSchema)


module.exports = {
    TodoModel
}