import backJumper from "../src/images/shop/blackjumper.jpg";
const productsArray = [
  {
    id: "1",
    title: "White Wavy Tee",
    photo: "",
    description: "",
    basecolour: "White",
    colour: [
      {
        Pink: 2,
        Orange: 2,
        blue: 2,
      },
    ],
    size: "small",
    price: 25,
    quantity: 3,
  },

  {
    id: "2",
    title: "Black Wavy Tee",
    photo: "",
    description: "",
    basecolour: "Black",
    colour: [
      {
        Pink: 2,
        Orange: 2,
        blue: 2,
      },
    ],
    size: "small",
    price: 25,
    quantity: 3,
  },

  {
    id: "3",
    title: "Wavy Hoodie",
    photo: backJumper,
    description: "",
    colour: "Blue",
    size: "small",
    price: 40,
    quantity: 3,
  },
];

function getProductData(id) {
  let productsData = productsArray.find((product) => product.id === id);

  if (productsData == undefined) {
    console.log("Product ID not found" + id);
    return undefined;
  }

  return productsData;
}

export { productsArray, getProductData };
