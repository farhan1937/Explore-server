// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();
// const { MongoClient, ServerApiVersion, ObjectId, } = require('mongodb');
// const app = express();
// const port = process.env.PORT || 5002;


// app.use(cors())
// app.use(express.json())


// // console.log(process.env.DB_USER);
// // console.log(process.env.DB_PASS);


// // const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6u84a8i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6u84a8i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


// console.log(uri);




// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");

//     const addTourists = client.db('touristsDB').collection('tourists');

//     app.get('/tourists', async (req, res) => {
//       const cursor = addTourists.find();
//       const result = await cursor.toArray();
//       res.send(result)
//     })

//     app.get('/tourists/:id', async (req, res) => {
//       const id = req.params.id
//       const query = { _id: new ObjectId(id) }
//       const result = await addTourists.findOne(query)
//       res.send(result)
//     })

//     app.post('/tourists', async (req, res) => {
//       const newCoffee = req.body
//       console.log(newCoffee);
//       const result = await addTourists.insertOne(newCoffee)
//       res.send(result)
      
//     })

//     app.put('/tourists/:id', async (req, res) => {
//       const id = req.params.id
//       const filter = { _id: new ObjectId(id) }
//       const options = { upsert: true }
//       const updateCoffee = req.body
//       const coffee = {
//         $set: {
//           photo: updateTourist.photo,
//           name: updateTourist.name,
//           country_Name: updateTourist.country_Name,
//           location: updateTourist.location,
//           short_description: updateTourist.short_description,
//           average_cost: updateTourist.average_cost,
//           seasonality: updateTourist.seasonality,
//           travel_time: updateTourist.travel_time,
//           totalVisitorsPerYear: updateTourist.totalVisitorsPerYear,
//           user_name: updateTourist.user_name,
//           User_Email: updateTourist.User_Email
//         }
//       }
//       const result = await addTourists.updateOne(filter, coffee, options)
//       res.send(result)
//     })

//     app.delete('/tourists/:id', async (req, res) => {
//       const id = req.params.id;
//       const query = { _id: new ObjectId(id) }
//       const result = await addTourists.deleteOne(query);
//       res.send(result)
//     })

//     // Send a ping to confirm a successful connection
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);



// app.get('/', (req, res) => {
//   res.send('coffee maker is running ')
// })



// app.listen(port, () => {
//   console.log(`Coffee server is running on port: ${port}`);
// })


const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId, } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000

//middelware
app.use(cors());
app.use(express.json());



console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);


// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6u84a8i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6u84a8i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log(uri)



app.get('/', (req,res) => {
    res.send('Coffee making server is running')
})

app.listen(port, () => {
    console.log(`Coffee server is running on port: ${port}`)
})

