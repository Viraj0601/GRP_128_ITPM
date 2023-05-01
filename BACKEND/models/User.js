const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({

    userID :{
         type : String
    },
    userName : {
        type : String
    },
    userPhoto : {
        type : Date
    },

})

const User = mongoose.model("User",UserSchema);

module.exports =  User;