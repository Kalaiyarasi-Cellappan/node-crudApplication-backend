const mongoose = require('mongoose');

exports.connect = () => {
    try{
        mongoose.connect('mongodb+srv://Kalaiyarasi:HBroHbxvC4rPKjLM@cluster0.zzvzb.mongodb.net/student?retryWrites=true&w=majority', {useNewUrlParser : true, useUnifiedTopology:true})
        console.log("Connected")
    } catch(err) {
        console.log(err);
        process.exit();
    }
}
