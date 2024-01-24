
// const express = require("express");
// const app = express();
// const port = 5000;

// const connectToMongoDB = require("./db");

// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// })

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

// app.use(express.json())
// app.use('/api', require("./Routes/CreatUser"))
// app.use('/api', require("./Routes/DisplayData"))
// app.use('/api', require("./Routes/OrderData"))

// connectToMongoDB().then(() => {
//     app.listen(port, () => {
//         console.log(`Example app listening on http://localhost:${port}`);
//     });
// });

global.foodData = require('./db')(function call(err, data, CatData) {
    // console.log(data)
    if(err) console.log(err);
    global.foodData = data;
    global.foodCategory = CatData;
  })
  const paymentController = require('./Routes/paymentController')
  const express = require('express')
  const app = express()
  const port = 5000
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.use(express.json())
  
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.use('/api', require("./Routes/CreatUser"))
  app.use('/api', require("./Routes/DisplayData"))
  app.use('/api', require("./Routes/OrderData"))

  app.post('/orders', paymentController.orders)
  app.post('/verify', paymentController.verify)
  
  app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
  })
  
  


// const express = require("express");

// const app = express();
// const port = 5000;

// const connectToMongoDB = require("./db");

// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// })


// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

// app.use(express.json())
// app.use('/api', require("./Routes/CreatUser"))
// app.use('/api', require("./Routes/DisplayData"))
// app.use('/api', require("./Routes/OrderData"))
// connectToMongoDB().then(() => {
//     app.listen(port, () => {
//         console.log(`Example app listening on http://localhost:${port}`);
//     });
// });



// const express = require("express");
// const cors = require("cors");
// const app = express();
// const port = 5000;

// const connectToMongoDB = require("./db");

// // Enable CORS for your frontend's origin (http://localhost:3000)
// app.use(cors({
//   origin: "http://localhost:3000",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
// }));

// // Handle preflight OPTIONS requests
// app.options("*", cors());

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.use(express.json());
// app.use("/api", require("./Routes/CreatUser"));
// app.use("/api", require("./Routes/DisplayData"));
// app.use("/api", require("./Routes/OrderData"));

// connectToMongoDB().then(() => {
//   app.listen(port, () => {
//     console.log(`Example app listening on http://localhost:${port}`);
//   });
// });
