import Link from "next/link";
import React from "react";
import { FiMail } from "react-icons/fi";

//internal import
import Error from "@component/form/Error";
import InputArea from "@component/form/InputArea";
import useLoginSubmit from "@hooks/useLoginSubmit";

const Mobile = ({ setShowResetPassword, setModalOpen }) => {
  const { handleSubmit, submitHandler, register, errors, loading } =
    useLoginSubmit(setModalOpen);

  return (
    <>
      <div className="text-center mb-6">
        <Link href="/">
          <a className="text-3xl font-bold font-serif">Login with otp?</a>
        </Link>
        <p className="text-sm md:text-base text-gray-500 mt-2 mb-8 sm:mb-10">
          mobile-otp-!
        </p>
      </div>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col justify-center"
      >
        <div className="grid grid-cols-1 gap-5">
          <div className="form-group">
            <InputArea
              register={register}
              label="MOBILE"
              name="mobile"
              type="mobile"
              placeholder="otp"
              Icon={FiMail}
            />
            <Error errorName={errors.verifyEmail} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex ms-auto">
              <button
                type="button"
                onClick={() => setShowResetPassword(true)}
                className="text-end text-sm text-heading ps-3 underline hover:no-underline focus:outline-none"
              >
                otp?
              </button>
            </div>
          </div>
          <button
            disabled={loading}
            type="submit"
            className="w-full text-center py-3 rounded bg-emerald-500 text-white hover:bg-emerald-600 transition-all focus:outline-none my-1"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
};

export default Mobile;
