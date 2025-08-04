const mongoose = require('mongoose');

const getConnection = () => {
 
    try{
        mongoose
        .connect(process.env.MONGO_URL)
        .then(()=>{
            console.log("db is connectd")
        })
        .catch(()=>{
            console.log("failed to connect to db")
        });

    }catch(error){
        console.log(error.message)
    }
};

module.exports=getConnection
