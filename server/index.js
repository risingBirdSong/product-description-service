const express = require("express");
const faker = require("faker");
const { productDetail, myConnection, fakeData } = require("../database");

const app = express();

app.use(express.json());
// app.use(express.static("public"));
app.use("/:id", express.static(`${__dirname}/../public`));

// todo

// general testing route

// make a single product
app.post("/makeproduct", (req, res) => {
  const newProductTemplate = {
    title: req.body.title || "todo title",
    description: req.body.description || "todo description",
    numberOfAnsweredQuestions: req.body.numberOfAnsweredQuestions || 0,
    amazonsChoice: req.body.amazonsChoice || false,
    primeDiscount: req.body.primeDiscount || "0",
    rating: req.body.rating || 0,
    numberOfRatings: req.body.numberOfRatings || 0,
    currentPrice: req.body.currentPrice || 10,
    inStock: req.body.inStock || true,
    soldBy: req.body.soldBy || "amazon",
    style: req.body.style || "basic style",
    descriptions: req.body.descriptions || [],
    freeShipping: req.body.freeShipping || false,
  };
  const myProduct = new productDetail(newProductTemplate);
  myProduct.save();
  res.json(myProduct);
});

// delete all from db
app.delete("/deleteAll", (req, res) => {
  // why not delete?
  productDetail.deleteMany().then((deleted) => {
    res.send(deleted);
  });
});

// app.get("/:id", (req, res) => {
//   const { id } = req.params;
//   console.log("id", id);

//   const findit = productDetail
//     .findOne({ urlFriendlyNumber: id })
//     .then((data) => {
//       console.log("data", data);
//       res.sen("/");
//     });
// });

app.get("/getsingleproduct/:id", (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  productDetail.findOne({ urlFriendlyNumber: id }).then((data) => {
    res.json(data);
  });
});

// get all the products
app.get("/getallproducts", (req, res) => {
  const all = productDetail.find().then((data) => {
    res.send(data);
  });
});

app.listen(3002, () => console.log("listening on port 3002"));
