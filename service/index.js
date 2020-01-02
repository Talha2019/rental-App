const express = require('express');
const mongoose = require('mongoose')
const Db = require('./Db/connection');
const Rental = require('./model/rental')
const FakeDb = require('./fake-db')

const rentalRoutes = require('./routes/rental')


// connectDB();

mongoose.connect(Db.DB_URI,{
           useNewUrlParser: true, 
           useUnifiedTopology: true}).then(() =>{
           
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
    console.log('db connected...')
}
)

const app = express();

app.use('/api/v1/rentals', rentalRoutes)


// app.get('rentals', function(req, res){
//     res.json({'success': true})
// })

// app.use(express.json({ extended: false }));
// app.use('/api/userModel', require('./Api/User'));


const PORT = process.env.PORT || 3001;

app.listen(PORT, function(){
    console.log("server started")
})