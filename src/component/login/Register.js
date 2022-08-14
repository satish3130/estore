import { FiLock, FiMail, FiUser } from "react-icons/fi";

//internal import
import Error from "@component/form/Error";
import InputArea from "@component/form/InputArea";
import useLoginSubmit from "@hooks/useLoginSubmit";

const Register = ({ setShowResetPassword, setModalOpen }) => {
  const { handleSubmit, submitHandler, register, errors, loading } =
    useLoginSubmit(setModalOpen);

  return (
    <>
      <div className="text-center mb-1">
        <h2 className="text-3xl font-bold font-serif">Signing Up</h2>
        <p className="text-sm md:text-base text-gray-500 mt-2 mb-1 sm:mb-10">
          Create an account with email
        </p>
      </div>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col justify-center"
      >
        <div className="grid grid-cols-1 gap-3">
          <div className="form-group">
            <InputArea
              register={register}
              label="Name"
              name="name"
              type="text"
              placeholder="Full Name"
              Icon={FiUser}
            />

            <Error errorName={errors.name} />
          </div>

          <div className="form-group">
            <InputArea
              register={register}
              label="Mobile Number"
              name="mobile"
              type="mobile"
              placeholder="Mobile"
              Icon={FiMail}
            />
            <Error errorName={errors.mobile} />
          </div>
          <div className="form-group">
            <InputArea
              register={register}
              label="Email"
              name="Email"
              type="Email"
              placeholder="Email"
              Icon={FiLock}
            />

            <Error errorName={errors.Email} />
          </div>
          <div className="form-group">
            <InputArea
              register={register}
              label="Password"
              name="Password"
              type="Password"
              placeholder="Password"
              Icon={FiLock}
            />

            <Error errorName={errors.password} />
          </div>
          <div className="form-group">
            <InputArea
              register={register}
              label="confrim password"
              name="password_confirmation"
              type="confrim password"
              placeholder="password_confirmation"
              Icon={FiLock}
            />

            <Error errorName={errors.password_confirmation} />
          </div>
          <div className="form-group">
            <InputArea
              register={register}
              label="referral id"
              name="referral_code"
              type="referral id"
              placeholder="referral_code"
              Icon={FiLock}
            />

            <Error errorName={errors.referral_code} />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex ms-auto">
              <button
                type="button"
                onClick={() => setShowResetPassword(true)}
                className="text-end text-sm text-heading ps-3 underline hover:no-underline focus:outline-none"
              >
                Forgot password?
              </button>
            </div>
          </div>
          <button
            disabled={loading}
            type="submit"
            className="w-full text-center py-2.5 rounded bg-emerald-500 text-white hover:bg-emerald-600 transition-all focus:outline-none my-1"
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
