// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const studentSchema = new Schema({
// _id : mongoose.Schema.Types.ObjectId,
//    //id:{type:Number,require:true},
//     firstname: {type:String,require:true},
//     lastname:{type:String,require:true},
//     place : {type:String,require:true}
// });


// const Student = mongoose.model('Student', studentSchema, 'students');
// module.exports = Student;

const mongoose = require('mongoose')
const studentSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    firstname: {type:String,require:true},
    lastname:{type:String,require:true},
    place : {type:String,require:true}
});
module.exports = mongoose.model('Student',studentSchema);