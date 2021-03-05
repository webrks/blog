var mongoose = require('mongoose');
var plm = require('passport-local-mongoose');

mongoose.connect('mongodb://localhost/blog');  

var userSchema = mongoose.Schema ({
    name : String ,
    username : String ,
    profileImage: {
        type: String,  
        default: './images/Uploads/defaut.jpg' 
    },
    posts: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'posts'
    }], 
    email : String ,
    password : String
})

userSchema.plugin(plm);
module.exports = mongoose.model('users' , userSchema);