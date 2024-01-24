// // const mongoose = require("mongoose");

// // const mongoURI =
// //   "mongodb+srv://saurabhgurung4:Saurabh4455@cluster0.mqgjmtu.mongodb.net/gofoodmern?retryWrites=true&w=majority";

// // const connectToMongoDB = async (callback) => {
// //   try {
// //     await mongoose.connect(mongoURI, { useNewUrlParser: true });
// //     console.log("Connected to MongoDB");

// //     const foodCollection = mongoose.connection.db.collection("fooditem");
// //     const data = await foodCollection.find({}).toArray();

// //     const foodcategory = mongoose.connection.db.collection("foodcategory");
// //     const Catdata = await foodcategory.find({}).toArray();

// //     callback(null, data, Catdata);
// //   } catch (error) {
// //     console.error(error);
// //     callback(error, null, null);
// //   }
// // };

// // module.exports = connectToMongoDB;


// // const mongoose  = require("mongoose");

// // var mongoURL = "mongodb+srv://saurabhgurung4:Saurabh4455@cluster0.mqgjmtu.mongodb.net/gofoodmern?retryWrites=true&w=majority" ;

// // mongoose.connect(mongoURL, {useNewUrlParser: true,useUnifiedTopology:true, useNewUrlParser:true})

// // var db = mongoose.connection ;

// // db.on('connected' , ()=> {
// //     console.log("MongoDB connected successfully");
// // })

// // db.on('error' , ()=> {
// //     console.log("MongoDB connection failed");
// // })

// // module.exports = mongoose

const mongoose = require("mongoose");

const mongoURI = 'mongodb+srv://saurabhgurung4:Saurabh4455@cluster0.mqgjmtu.mongodb.net/gofoodmern?retryWrites=true&w=majority';

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log("Connected to MongoDB");

        const foodCollection = mongoose.connection.db.collection("fooditem");
        const data = await foodCollection.find({}).toArray();
        const foodcategory = mongoose.connection.db.collection("foodcategory");
        const catData = await foodcategory.find({}).toArray();

        global.fooditem = data;
        global.foodcategory = catData;

        // console.log("Data fetched from MongoDB:", global.fooditem, global.foodcategory);

        
    } catch (error) {
        console.error();
    }
};

module.exports = connectToMongoDB;