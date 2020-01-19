const mongoose = require('mongoose')
const configureDB=()=>{
    mongoose.Promise = global.Promise
    mongoose.connect("mongodb://localhost:27017/ticket-master",{useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>{
            console.log('connected to database')
        })
        .catch(()=>{
            console.log('error connecting to database')
        })
}
module.exports = configureDB