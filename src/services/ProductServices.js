import requests from "./httpServices";

const ProductServices = {
  getShowingProducts() {
    return requests.get("/products/show");
  },

  // getDiscountedProducts() {
  //   return requests.get("/products/discount");
  // },

  getProductBySlug(id) {
    return requests.get(`/productlist/${id}`);
  },
};

export default ProductServices;

export const Subcategory = async (shopper_id) => {
  var formdata = new FormData();
  formdata.append("shopper_id", shopper_id);

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
