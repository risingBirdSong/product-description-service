const mongoose = require("mongoose");
const faker = require("faker");
const { productDetail } = require("./index");

const mySeedConnection = mongoose.connect(
  "mongodb://127.0.0.1/fec_amazon_products"
);

const fakeDescriptions = () => {
  const howMany = faker.random.number(10);
  return Array(howMany)
    .fill(0)
    .map(() => {
      return `${faker.company.bsAdjective()} ${faker.commerce.color()} ${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()} ${faker.company.bsNoun()}`;
    });
};

const fakeStyles = () => {
  const howMany = faker.random.number(3);
  return Array(howMany)
    .fill(0)
    .map(() => {
      return faker.company.bsAdjective();
    });
};

const options = [0, 5];
// make a single fake review;
const makeFake = (idx) => {
  const padded = String(idx).padStart(3, "0");
  console.log("padded", padded);
  const newProduct = productDetail.create({
    producer: faker.company.companyName(),
    urlFriendlyNumber: padded,
    title: faker.commerce.productName(),
    description: `${faker.commerce.productAdjective()} ${faker.company.bsAdjective()} ${faker.commerce.color()} ${faker.commerce.productMaterial()}`,
    rating: Number(
      `${faker.random.number(5)}.${options[Math.floor(Math.random() * 2)]}`
    ),
    wasPrice: faker.random.number(500),
    currentPrice: faker.random.number(500),
    soldBy: faker.company.companyName(),
    descriptions: fakeDescriptions(),
    numberOfAnsweredQuestions: faker.random.number(30),
    amazonsChoice: faker.random.boolean(),
    primeDiscount: faker.random.number(10),
    numberOfRatings: faker.random.number(20),
    inStock: faker.random.boolean(),
    freeShipping: faker.random.boolean(),
    styles: fakeStyles(),
  });
};

// make n amount of fake descriptions
const makeNAmount = (amount) => {
  return Array(amount)
    .fill(0)
    .map((zero, idx) => makeFake(idx));
};

const fakeData = makeNAmount(100);

mongoose.connection.close();
