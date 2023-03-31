const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    facilities: {
        type: Array,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    rentperday: {
        type: Number,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    imageurls:[],
    currentbookings: [],
    description:{
        type: String,
        required: true
    }
},{
    timestamp:true,
})

const RoomModel = mongoose.model('rooms', roomSchema);

module.exports = RoomModel;