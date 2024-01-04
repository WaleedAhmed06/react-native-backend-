const mongose = require("mongoose")

const TaskSchema = mongose.Schema(
{
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    startdate:{
        type:String,
        required:true,
    },
    enddate:{
        type:String,
        required:true,
    },
    achievekey:{
        type:String,
        required:false,
    },
    foreignkey:{
        type:String,
        required:false,
    }
  },
  {
    timestamps: true,
  }
)

const TaskModel = mongose.model("task",TaskSchema)
module.exports = TaskModel;
  