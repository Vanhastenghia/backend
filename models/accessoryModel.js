const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'News must have name'],
    },
    code: {
        type: String,
        unique: true,
        required: [true, 'News must have code product'],
    },
    price: {
        type: Number,
        required: [true, 'News must have price'],
    },
    type: {
        type: String,
        // enum: ['glass', 'wheel', 'phone holder', 'seat', 'gadget', 'power bank', 'wireless', 'charger', 'trunk', 'engine', 'cover', 'cleanning', 'mats', 'shield', 'seat cover', 'other'],
        default: 'other',
        //required: [true, 'News must have type'],
    },
    image: {
        avatar: { type: String, required: [true, 'News must have avatar'] },
        banner: { type: String, required: [true, 'News must have banner'] },
        gallery: [],
    },
    amount: {
        //số lượng
        type: Number,
        required: [true, 'News must have amount'],
    },
    description: {
        //mô tả thông tin xe
        type: String,
        //required: [true, 'News must have description'],
    },
    warrantyPeriod: {
        // thời gian bảo hành
        type: Number,
        required: [true, 'News must have warranty period'],
        default: 1,
    },
    specification: {}, //thông số kỹ thuật chưa tối ưu
    color: {
        type: [String],
        default: ['black', 'white'],
        enum: ['red', 'yellow', 'white', 'blue', 'green', 'orange', 'pink', 'grey', 'black', 'brown', 'purple'],
        default: 'black',
    },
});

accessorySchema.index({ '$**': 'text' });

const Accessory = mongoose.model('Accessory', accessorySchema);
module.exports = Accessory;
