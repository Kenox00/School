const mongoose = require('mongoose');

const assessmentSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    subject: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Subject',
        required: true
    },
    class: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Class',
        required: true
    },
    date: {
        type:Date,
        required: true
    },
    maxScore: {
        type:Number,
        required: true
    },
},{
    timestamps: true,
});

const Assessment = mongoose.model('assessment', assessmentSchema)

module.exports = Assessment