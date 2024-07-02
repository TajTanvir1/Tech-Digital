const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 5000;


// Middleware

app.use(cors({
   origin: [
      "https://tech-digital-a75ef.web.app",
'https://tech-digital-tanvir.netlify.app'
    ],
    credentials: true,
}));


app.use(express.json());




const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.g5peoxj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
   //  await client.connect();


const servicesCollection = client.db('techDigital').collection('services')
const usersCollection = client.db('techDigital').collection('users')
const tasksCollection = client.db('techDigital').collection('tasks')
const opinionsCollection = client.db('techDigital').collection('opinions')
const paymentsCollection = client.db('techDigital').collection('payments')


// JWT relate API
app.post('/jwt', async(req, res) =>{
   const user = req.body;
   const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1h'});
   res.send({token});
})



// users API
app.post('/users', async (req,res)=>{
   const user = req.body;
   // insert email if user not exist
   const query = {email: user.email}
   const existingUser = await usersCollection.findOne(query);
   if(existingUser){
      return res.send({message: "Usr Already Exist", insertedId: null})
   }
   const result = await usersCollection.insertOne(user);
   res.send(result);
})

// Tasks API
app.post('/tasks', async (req, res) => {
   const tasks = req.body;
   // console.log(tasks);
   const result = await tasksCollection.insertOne(tasks);
   res.send(result);
})

// Payments API
app.post('/payments', async (req, res) => {
   const payments = req.body;
   const result = await paymentsCollection.insertOne(payments);
   res.send(result);
})


// Get Services
app.get('/services', async(req,res)=>{
   const cursor = servicesCollection.find();
   const result = await cursor.toArray();
   res.send(result);
})

// Opinions Post
app.post('/opinions', async (req, res) => {
   const opinions = req.body;
   const result = await opinionsCollection.insertOne(opinions);
   res.send(result);
})

// Get Opinions
app.get('/opinions', async(req,res)=>{
   const cursor = opinionsCollection.find();
   const result = await cursor.toArray();
   res.send(result);
})

// Update Verify
app.patch('/users/:id', async (req, res) => {
   const id = req.params.id;
   const filter = { _id: new ObjectId(id) };
   const updatedDoc = {
     $set: {
      verified : 'true'
     }
   }
   const result = await usersCollection.updateOne(filter, updatedDoc);
   res.send(result);
 })

// Update Salary
app.patch('/updateSalary/:id', async (req, res) => {
   const id = req.params.id;
   const amount = req.body;
   console.log(amount.salary, id);
   const filter = { _id: new ObjectId(id) };
   const updatedDoc = {
     $set: {
      salary : amount.salary
     }
   }
   const result = await usersCollection.updateOne(filter, updatedDoc);
   res.send(result);
 })

 // Update HR
app.patch('/fireUsers/:id', async (req, res) => {
   const id = req.params.id;
   const filter = { _id: new ObjectId(id) };
   const updatedDoc = {
     $set: {
      isFired : true
     }
   }
   const result = await usersCollection.updateOne(filter, updatedDoc);
   res.send(result);
 })

  // Make HR
app.patch('/allUsers/:id', async (req, res) => {
   const id = req.params.id;
   const filter = { _id: new ObjectId(id) };
   const updatedDoc = {
     $set: {
      designation : 'HR'
     }
   }
   const result = await usersCollection.updateOne(filter, updatedDoc);
   res.send(result);
 })


// Get Users for HR
app.get('/users', async(req,res)=>{
   const query = { designation : 'Employee'};
   const cursor = usersCollection.find(query);
   const result = await cursor.toArray();
   res.send(result);
})

// Get All Users 
app.get('/allUsersList', async(req,res)=>{
   const cursor = usersCollection.find();
   const result = await cursor.toArray();
   res.send(result);
})

// Middlewares
const verifyToken = (req,res,next)=>{
   // console.log('inside token', req.headers);
   if(!req.headers.authorization){
      return res.status(401).send({message: 'Forbidden Access'})
   }
   const token = req.headers.authorization.split(' ')[1];
   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decode)=>{
      if(err){
      return res.status(401).send({message: 'Forbidden Access'})
      }
      req.decode = decode;
      next()
   })
}

// Get Users for Admin
app.get('/allUsers', async(req,res)=>{
   const query = { designation: {$ne: "Admin"}}
   const cursor = usersCollection.find(query);
   const result = await cursor.toArray();
   res.send(result);
})

// Get a single Employee Data
app.get('/users/:email', async (req, res) => {
   const employeeEmail = req.params.email
   const query = { email : employeeEmail }
   const result = await usersCollection.findOne(query)
   res.send(result)
 })


// Get Tasks by Email
app.get('/tasks/:email', async(req,res)=>{
   // const query = { email: req.params.email }
   const result = await tasksCollection.find({ email: req.params.email }).sort({date:-1}).toArray();
   res.send(result);
})

// Get Payments by Email
app.get('/payments/:email', async(req,res)=>{
   const result = await paymentsCollection.find({ email: req.params.email }).toArray();
   res.send(result);
})

// Get Tasks
app.get('/tasks', async(req,res)=>{
   const result = await tasksCollection.find().sort({date:-1}).toArray();
   res.send(result);
})

// Get Progress
app.get('/progress', async(req,res)=>{
   // const query = { email: req.params.email }
   const result = await tasksCollection.find().toArray();
   res.send(result);
})


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   //  await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req,res)=>{
   res.send('Tech Digital')
})

app.listen(port, ()=>{
   console.log(`Tech Digital running on ${port}`);
})