const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const usersRoutes = require('./routes/admin/users');
const classRoutes = require('./routes/admin/class');
const serviceRoutes = require('./routes/admin/service');

env.config();

// mongodb
//mongodb+srv://root:<password>@cluster0.elzwa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.elzwa.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:true,
        useCreateIndex:true
    }).then(()=>{
    console.log('Database connnected.');
});

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api',authRoutes);
app.use('/api',adminRoutes);
app.use('/api',usersRoutes);
app.use('/api',classRoutes);
app.use('/api',serviceRoutes);

// app.get('/',(req,res,next) =>{
//     res.status(200).json({
//         message:'Hello'
//     });
// });

// app.post('/data',(req,res,next) => {
//     res.status(200).json({
//         message: req.body
//     });
// });

// app.listen(process.env.PORT, () => {
//     console.log('server is running');
// });

app.listen(process.env.PORT || 2000, () => {
    console.log('server is running');
});