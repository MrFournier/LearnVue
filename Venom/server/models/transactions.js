const mongoose = require('mongoose')
const Schema = mongoose.Schema

let transactionSchema = new Schema({
    userId: mongoose.Schema.ObjectId,
    transactionDate: { type: Date, required: true },
    transactionType: { type: String, required: true },
    description: { type: String, required: true },
    charge: { type: Double, default: 0 },
    deposit: { type: Double, default: 0 },
    notes: { type: String, default: '' },
    createdOn: { type: Date, default: Date.now },
})

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction