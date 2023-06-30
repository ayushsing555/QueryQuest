const mongoose = require("mongoose");
const CommentStructure = new mongoose.Schema({
    AnsId: {
        type: String,
        required: true
    },
    QuesId:{
        type:String,
        required:true
    },
    likes: {
        type: Number,
        default: 0
    },
    likedBy:[
               String
        ],
    postedOn: {
        type: Date,
        default: Date.now()
    },
    postedBy: {
        type: String,
    },
    comment: {
        type: String,
    }
});
const Comment = mongoose.model("Comment", CommentStructure);
module.exports = Comment;