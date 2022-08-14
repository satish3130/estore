import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
// import { GoogleLogin } from "react-google-login";

//internal import
import UserServices from "@services/UserServices";
import { UserContext } from "@context/UserContext";
import { notifyError, notifySuccess } from "@utils/toast";

const useLoginSubmit = (setModalOpen) => {
  const router = useRouter();
  const { redirect } = router.query;
  const { dispatch } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  var id = process.env.NEXT_PUBLIC_STORE_ID;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const submitHandler = ({
    // name,
    mobile,
    // registerEmail,
    verifyEmail,
    password,
  }) => {
    setLoading(true);
    if (mobile && password) {
      UserServices.userLogin({
        mobile,
        password,
        shopper_id: id,
      })
        .then((res) => {
          setLoading(false);
          setModalOpen(false);
          router.push(redirect || "/");
          notifySuccess("Login Success!");
          dispatch({ type: "USER_LOGIN", payload: res });
          localStorage.setItem("userInfo", res.token);
          Cookies.set("userInfo", JSON.stringify(res));
          console.log("userInfo", JSON.stringify(res));
          // localStorage.setItem("userInfotoken", userInfo.token);
        })
        .catch((err) => {
          notifyError(err ? err.response.data.status : err.message);
          setLoading(false);
        });
    }
    // if (name && email && password) {
    //   UserServices.verifyEmailAddress({ name, email, password })
    //     .then((res) => {
    //       setLoading(false);
    //       setModalOpen(false);
    //       notifySuccess(res.message);
    //     })
    //     .catch((err) => {
    //       setLoading(false);
    //       notifyError(err.response.data.message);
    //     });
    // }
    if (verifyEmail) {
      UserServices.forgetPassword({ verifyEmail })
        .then((res) => {
          setLoading(false);
          notifySuccess(res.message);
          setValue("verifyEmail");
        })
        .catch((err) => {
          setLoading(false);
          notifyError(err ? err.response.data.message : err.message);
        });
    }
  };

  // const handleGoogleSignIn = (user) => {
  //   console.log("google sign in", user);
  //   if (user.profileObj.name) {
  //     UserServices.signUpWithProvider({
  //       name: user.profileObj.name,
  //       email: user.profileObj.email,
  //       image: user.profileObj.imageUrl,
  //     })
  //       .then((res) => {
  //         setModalOpen(false);
  //         notifySuccess("Login success!");
  //         router.push(redirect || "/");
  //         dispatch({ type: "USER_LOGIN", payload: res });
  //         Cookies.set("userInfo", JSON.stringify(res));
  //       })

  //       .catch((err) => {
  //         notifyError(err.message);
  //         setModalOpen(false);
  //       });
  //   }
  // };

  return {
    handleSubmit,
    submitHandler,
    // handleGoogleSignIn,
    register,
    errors,
    // GoogleLogin,
    loading,
  };
};

export default useLoginSubmit;
