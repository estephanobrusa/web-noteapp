const mongoose=require('mongoose')
require('dotenv').config();

const mongoUri=`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

//console.log(mongoUri);
mongoose.connect(mongoUri,
{
    useUnifiedTopology:true,
    useNewUrlParser:true,
})
.then(db=>console.log("db connected"))
.catch(e=>console.log)

