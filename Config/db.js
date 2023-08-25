const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://app-gm:app-gm@app-api.bnjyp.mongodb.net/?retryWrites=true&w=majority')
        console.log('DB Connected')
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB