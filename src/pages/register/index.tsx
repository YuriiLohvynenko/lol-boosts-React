import { Link } from "react-router-dom";
import classNames from "../../consts/classNames";
import { FaDiscord, FaGoogle } from "react-icons/fa";

const Register = () => {
  return (
    <div className="pt-16">
      <div className={`${classNames.containerClass}`}>
        <div className="mx-auto max-w-[567px] shadow-sm rounded-lg py-12 bg-indigo-950 bg-opacity-20">
          <div className="max-w-[85%] mx-auto">
            <h4 className="text-2xl font-bold">Hi, Welcome Back</h4>
            <p>
              Hello Again, We have{" "}
              <span className="text-indigo-800">missed you!</span>
            </p>
            <div className="mt-10 space-y-8">
              <div className="flex flex-col gap-2">
                <label>Email</label>
                <input
                  type="email"
                  className={`${classNames.inputClass}`}
                  placeholder="Your Email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Password Confirm</label>
                <input
                  type="password"
                  className={`${classNames.inputClass}`}
                  placeholder="Your Password"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Password</label>
                <input
                  type="password"
                  className={`${classNames.inputClass}`}
                  placeholder="Your Password Confirm"
                />
              </div>
              <button className={`rounded-lg w-full ${classNames.btnClass}`}>
                Register
              </button>
            </div>
            <div className="mt-4">
              <Link to="" className="text-gray-500">
                Forgot Password?
              </Link>
              <div className="mt-6 flex justify-center items-center gap-2">
                <button
                  className={`bg-indigo-900 ${classNames.btnClass} flex justify-center items-center gap-2`}
                >
                  <FaGoogle /> Google
                </button>
                <button
                  className={`bg-indigo-900 ${classNames.btnClass} flex justify-center items-center gap-2`}
                >
                  <FaDiscord /> Discord
                </button>
              </div>
              <div className="mt-6 text-center">
                <Link to="/login" className="text-gray-500">
                  Do have an account? Sign in now!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
