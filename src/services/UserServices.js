import requests from "./httpServices";

const UserServices = {
  userLogin(body) {
    return requests.post("/login", body);
  },

  // verifyEmailAddress(body) {
  //   return requests.post("/user/verify-email", body);
  // },

  userRegister(token, body) {
    return requests.post(`/register/${token}`, body);
  },

  // signUpWithProvider(body) {
  //   return requests.post("/user/signup", body);
  // },

  forgetPassword(body, headers) {
    return requests.post("/password/create", body, headers);
  },

  // resetPassword(body) {
  //   return requests.put("/user/reset-password", body);
  // },

  changePassword(body) {
    return requests.post("/password/reset", body);
  },

  // updateUser(id, body) {
  //   return requests.put(`/user/${id}`, body);
  // },
};

export default UserServices;
