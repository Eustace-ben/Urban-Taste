import images from "./images";





const awards = [
  {
    imgUrl: images.award02,
    title: "Customer Choice",
    subtitle: "Voted best restaurant by our valued customers in 2024.",
  },
  {
    imgUrl: images.award01,
    title: "Excellence",
    subtitle: "Our commitment to  give back and support local initiative",
  },
  {
    imgUrl: images.award05,
    title: "Best Ambiance",
    subtitle:
      "Celebrating a restaurant's atmosphere, interior design, and overall dining experience.",
  },
  {
    imgUrl: images.award03,
    title: "Michelin Star Rating",
    subtitle:
      "A prestigious rating based on the quality of food, creativity, and consistency.",
  },
];

const orders = [
  { id: 1, imgUrl: images.GrilledFish, title: "Grilled Fish", amount:1500 },
  { id: 2, imgUrl: images.Afang, title: "Afang Soup", amount:7000},
  { id: 3, imgUrl: images.EgusiSoup, title: "Egusi Soup with fufu", amount:5500 },
 
];

const gallery = [
  { id: 1, imgUrl: images.GrilledFish, name:"Grilled Fish", amount:1500 },
  { id: 2, imgUrl: images.Afang, name:"Afang Soup", amount:7000 },
  { id: 3, imgUrl: images.EgusiSoup, name:"Egusi Soup", amount:5500},
  { id: 4, imgUrl: images.Abacha, name:"Abacha", amount:3500},
  { id: 5, imgUrl: images.OkroSoup, name:"Okro Soup", amount:6000},
  { id: 6, imgUrl: images.OkaziSoup, name:"Okazi Soup", amount:5000},
  { id: 7, imgUrl: images.OhaSoup, name:"Oha Soup", amount:4500},
  { id: 8, imgUrl: images.OfeNsala, name:"Ofe Nsala", amount:5000},
  { id: 9, imgUrl: images.OfeOwerri, name:"Ofe Owerri", amount:6000},
];


export default { awards, orders, gallery };
