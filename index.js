const express = require('express');
const cors = require('cors');
const connectDB = require('./database')
const data = require('./routes/user.route.js')



const app = express();
app.use(express.json());
app.use(cors());

// config database 

connectDB.connect((error) => {
    if(error) {
        console.log(error)
    } else {
        console.log("Success connected")
    }
})

app.use('/student', data)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server runing on Port ${PORT}`);
});



