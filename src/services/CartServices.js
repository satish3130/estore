import axios from "axios";
var id = process.env.NEXT_PUBLIC_STORE_ID;

// export const Getcart = async () => {
//   return await axios.get(`${process.env.NEXT_PUBLIC_STORE_API_URL}/cart/${id}`);
// };

export const Getcart = async () => {
  let config = {
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_STORE_API_URL}/cart/${id}`,
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return await axios(config);
};
// export const Getcart = async () => {
//   return await axios.get(`${process.env.NEXT_PUBLIC_STORE_API_URL}/cart/${id}`);
// };
