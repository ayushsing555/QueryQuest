const mongoose = require("mongoose");
const QueryScheme = mongoose.Schema({
    Question: {
        type: String
    },
    identification: {
        type: String
    },
    postedBy: {
        type: String,
    },
    postedOn: {
        type: Date,
        default: Date.now()
    },
    likes: {
        type: Number,
        default: 0
    },
    Priority: {
        type: Boolean,
        default: false
    },
    identification: {
        type: String,
    },
    views: [
        {
            userName: {
                type: String
            },
            Session: [
                {
                    SpendTimes: {
                        type: Number,
                    },
                    startsAt: {
                        type: Date,
                        default: Date.now()
                    }
                }
            ]
        }
    ],
    answers: [{
        ansId: {
            type: String
        },

        postedOn: {
            type: Date,
            default: Date.now()
        },
        likedBy: [
            String
        ],
        ans: {
            type: String
        },
        postedBy: {
            type: String,
            default: "singhal"
        },
        likes: {
            type: Number,
            default: 0
        },
    }]
});
QueryScheme.methods.addData = async function (Answer, a, postedBy) {
    this.answers = this.answers.concat({ans: Answer, ansId: a, postedBy: postedBy, commentId: a, postedOn: Date.now()});
    await this.save();
    return this.answers;
};

QueryScheme.methods.addComment = async function (Comment, postedBy, a) {
    console.log(Comment);
    this.answers.comments = this.answers.comments.concat({comment: Comment, postedBy: postedB, y});
    await this.save();
    return this.answers.comment;
};

const Query = new mongoose.model("QUERY", QueryScheme);
module.exports = Query;