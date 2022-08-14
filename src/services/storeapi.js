import axios from "axios";
// import { useEffect, useState } from "react";

// useEffect(() => {
//   axios
//     .get(`${process.env.NEXT_PUBLIC_STORE_API_URL}//get_branch_map/${id}`)
//     .then((res) => {
//       console.log(res);
//     });
// }, []);

var id = process.env.NEXT_PUBLIC_STORE_ID;

export const Bannerimg = async () => {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_STORE_API_URL}/banner_customer/${id}`
  );
};

// // This gets called on every request
// export async function Logo() {
//   // Fetch data from external API
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_STORE_API_URL}/shop_web_details/1`
//   );
//   const data = await res.json();
//   console.log(data);
//   // Pass data to the page via props
//   return { props: { data } };
// }

export const Shopwebdetails = async () => {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_STORE_API_URL}/shop_web_details/${id}`
  );
};

export const Featuredcategoryapi = async () => {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_STORE_API_URL}/productslist_onlycategory/${id}`
  );
};

export const BestSelling = async () => {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_STORE_API_URL}/products/best_selling_product_without_token/${id}/12/${id}`
  );
};
