// import React from "react";

import ProductCard from "./ProductCard";

const ProductCatalog = () => {
//   const numbers = [1, 2, 4, 5];
  //   const product = {
  //     name: "prodct 1",
  //     price: 100,
  //   };

  // why do we need array of an object
  const products = [
    {
      name: "Gaming Mousepad",
      price: 100,
      img: "/3.jpeg",
      desc: "Gojo,Geto,Mei mei",
    },
    {
      name: "Meow Mousepad",
      price: 200,
      img: "/7.jpeg",
      desc: "GOjo cat",
    },
    {
      name: "Ghost Mousepad",
      price: 300,
      img: "/8.jpeg",
      desc: "Boo",
    },
    {
      name: "JJK Mousepad",
      price: 400,
      img: "/4.jpeg",
      desc: "Yuta q Yuji",
    },
    {
      name: "Gaming Mousepad",
      price: 100,
      img: "/3.jpeg",
      desc: "Gojo,Geto,Mei mei",
    },
    {
      name: "Meow Mousepad",
      price: 200,
      img: "/7.jpeg",
      desc: "GOjo cat",
    },
    {
      name: "Ghost Mousepad",
      price: 300,
      img: "/8.jpeg",
      desc: "Boo",
    },
    {
      name: "JJK Mousepad",
      price: 400,
      img: "/4.jpeg",
      desc: "Yuta q Yuji",
    },
  ];

  return (
    <section className="mt-10 px-20">
      <div>
        /<h2 className="text-2xl font-bold mb-8">Product Catalog</h2>
        <div className="grid grid-cols-4 gap-6">
          {products.map((product,index) => (
            <div key={index}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
