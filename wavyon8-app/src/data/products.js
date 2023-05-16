import blackJumper from "../assets/images/shop/blackjumper.jpg";
import white_purple_tee from "../assets/images/shop/white_purple_tee.png";
import black_purple_tee from "../assets/images/shop/black_purple_tee.png";

const products = [
  {
    id: 1,
    title: "White Wavy Tee",
    photo: white_purple_tee,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    basecolour: "White",
    colours: [
      {
        Pink: 2,
        Orange: 2,
        blue: 2,
      },
    ],
    size: "small",
    price: 25,
    quantity: 6,
  },

  {
    id: 2,
    title: "Black Wavy Tee",
    photo: black_purple_tee,
    description: "",
    basecolour: "Black",
    colours: [
      {
        Pink: 2,
        Orange: 2,
        blue: 2,
      },
    ],
    size: "small",
    price: 25,
    quantity: 6,
  },

  {
    id: 3,
    title: "Wavy Hoodie",
    photo: blackJumper,
    description: "",
    colours: [
      {
        blue: 2,
      },
    ],
    size: "small",
    price: 40,
    quantity: 3,
  },
];

function getProductData(id) {
  let productsData = products.find((product) => product.id === id);

  if (productsData == undefined) {
    console.log("Product ID not found" + id);
    return undefined;
  }

  return productsData;
}

export default products;
