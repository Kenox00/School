const mongoose = require('mongoose');

const marksSchema = new mongoose.Schema({
    assessment: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Assessment',
        required: true
    },
    student: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student',
        required: true
    },
    score: {
        type:Number,
        required: true
    },

},{
    timestamps: true,
});

const Marks = mongoose.model('marks', marksSchema)

module.exports = Marks