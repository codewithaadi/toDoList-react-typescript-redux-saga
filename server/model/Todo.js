import mongoose from "mongoose";


const TodoSchema = new mongoose.Schema({
    content:{
        type:String,
        required : true
    },
    done:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Todo= mongoose.model('todo',TodoSchema);
export default Todo;