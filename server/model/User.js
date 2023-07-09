const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userstructure = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },

    detail: {
        type: String,
        require: true,
    },
    gender: {
        type: String,
        require: true
    },
    fullName: {
        type: String,
        require: true
    },
    createdDate: {
        type: Date,
        default: Date.now()
    },
    ticket: {
        type: String,
        default: "Free"
    },
    validUpTo: {
        type: Date,
        default: function () {
            const oneMonthFromNow = new Date();
            oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1);
            return oneMonthFromNow;
        }
    },
    TotalQueryPosted: {
        type: Number,
        required: true,
        default: 0
    },
    CurrentQueryPosted: {
        type: Number,
        required: true,
        default: 0
    },
    instagram: {
        type: String,
        require: true,
    },
    linkdin: {
        type: String,
        require: true
    },
    github: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    identification: {
        type: String,
        required: true
    },
    PaymentHistory: [
        {
            dateOfBuy: {
                type: Date,
                default: Date.now()
            },
            ticket: {
                type: String,
            },
            validity: {
                type: Number
            },
            validUpTo: {
                type: Date
            }
        }
    ],
    tokens: [
        {
            token: {
                type: String,
            },
            time: {
                type: Date,
                default: Date.now()
            }
        }
    ],
    TimeSpend: [
        {
            QuestionId: {
                type: String
            },
            TotaltimeSpend:{
                type:Number
            },
            Time: [
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
    ]

});
userstructure.methods.generateToken = async function (next) {
    try {
        const token = jwt.sign({_id: this._id.toString()}, process.env.SECRECT_KEY);
        this.tokens = this.tokens.concat({token: token, time: Date.now()});
        this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
};

userstructure.methods.addPayment = async function (validDate, Ticket, Validity) {
    try {
        this.PaymentHistory = this.PaymentHistory.concat({dateOfBuy: Date.now(), ticket: Ticket, validity: Validity, validUpTo: validDate});
        this.save();
        return this;
    }
    catch (e) {
        console.log(e);
    }
};
const User = mongoose.model("User", userstructure);
module.exports = User;