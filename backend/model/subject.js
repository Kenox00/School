const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    teacher: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Teacher',
        required: true
    },
    classes: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Class',
        required: true
    }],
},{
    timestamps: true,
});

const Subject = mongoose.model('subject', subjectSchema)

module.exports = Subject