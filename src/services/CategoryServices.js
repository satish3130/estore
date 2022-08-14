import requests from "./httpServices";
import axios from "axios";

const CategoryServices = {
  // productsBysubcategory(body, headers) {
  //   return requests.post("/customer/productbysub", body, headers);
  // },
  // productsBysubcategory(body, headers) {
  //   return requests.post("/customer/productbysub", body, headers);
  // },
};

export default CategoryServices;

export const Subcategory = async (shopper_id, id) => {
  var formdata = new FormData();
  formdata.append("shopper_id", shopper_id);
  formdata.append("category_id", id);

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STORE_API_URL}/customer_subcategory`,
    requestOptions
  );
  const data = await res.json();
  return data;
};
export const productsBysubcategory = async (data) => {
  let config = {
    method: "post",
    url: `${process.env.NEXT_PUBLIC_STORE_API_URL}/customer/productbysub`,
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: data.body,
  };
  return await axios(config);
};
