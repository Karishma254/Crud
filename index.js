var microtime = require("microtime");
const express = require("express");
const res = require("express/lib/response");
var fs = require("fs");
const mongoose = require("mongoose");
const app = express();
const port = 3001;
const schema = require("./schema");
const Microtime = require("./microtime");

app.use(express());
app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/dbcrud", {
    UseNewUrlParser: true,
    useunifiedtopology: true,
  })
  .then(() => {
    console.log("Database is connected ");
  });

// GET DATA

// app.get("/get", async (req, res) => {
//  const data = await schema.find({});

//  try {
//    res.json( {message: "Data found", data: data , status : true} );
//  } catch (error) {
//    res.json( {message: "Data not found", status : false} );
//  }
// });

// // // POST DATA

app.post("/post", async (req, res) => {
  let { time, Date } = req.body;
  try {
    if (!time || !Date) {
      res.json({ message: "Enter all data", status: false });
    } else {
      const data = await schema.create({
        time,
        Date,
      });

      res.json({ data });
    }
  } catch (error) {
    res.send("Data is not post");
    res.status(400).send(error.message);
  }
});


app.patch("/update/plandescription", async( req,res)=> {
let {planId, subPlanId}= req.body;
try {
  if (!planId || !subPlanId) {
    res.json({ message: "Enter all data", status: false });
  } else {
const 

    res.json({ data });
  }
}




})

// // // PATCH DATA (UPDATE)
// DELETE DATA

app.delete("/delete/:id", async (req, res) => {
  const { time, Date } = req.body;
  try {
    const data = await schema.findOneAndDelete(
      {
        _id: req.params.id,
      },
      {
        time,
        Date,
      },
      { new: true }
    );
    res.sendDate("data has deleted", data);
  } catch (error) {
    res.status(400).send(error);
    console.log("data is deleted");
  }
});

// // // DATABASE ConnectioN

// app.listen(port, () => {
//  console.log(` listening on port ${port}`)
// })
