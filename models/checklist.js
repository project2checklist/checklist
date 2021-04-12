const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const basicSchema = new Schema(
//     {
//     essentials: {
//         type: String,
//         // enum: ["Passport", "Picture ID", "Credit Cards", "Boarding Pass"]
//     },
//     clothing: {
//         type: String,
//         // enum: ["Shirts", "Pants", "Undergarments"]
//     },
//     accesories: {
//         type: String,
//         // enum: ["Glasses", "Watch", "Earbuds"]
//     },
//     entertainment: {
//         type: String,
//         // enum: ["Books", "Pack of cards"]
//     },
//     technology: {
//         type: String,
//         // enum: ["Phone", "Phone Charger", "Laptop", "Laptop Charger", "Universal Travel Adapter"]
//     },
//     toiletries: {
//         type: String,
//         // enum: ["Toothbrush", "Toothpaste", "Deodorant", "Body wash", "Shampoo", "Conditioner"]
//     }
// })



const itemsSchema = new Schema({
    name: String,
    quantity: {type: Number, min: 0, max: 5, default: 1},
    section: {type: String,enum: ["Essentials", "Clothing", "Toiletries", "Technology", "Entertainment", "Accessories"] }
  }, {
    timestamps: true
  });

const checklistSchema = new Schema({
    dateOfTrip: {
        type: Date
    },
    destination: {
        type: String
    },
    lengthOfStay: {
        type: String
        //Check out methods for range of dates
    },
    items: [itemsSchema]
},
{ 
    timestamps: true
}
);


module.exports = mongoose.model('Checklist', checklistSchema);
