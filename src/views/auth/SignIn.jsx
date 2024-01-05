import axios from "axios";
import InputField from "components/fields/InputField";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from 'services/config';

export default function SignIn() {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      await axios.post(`${BASE_URL}/api/auth/login`, values, {
        withCredentials: true,
      });
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  const { handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit,
  });

  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Sign In
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your username and password to sign in!
        </p>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Username*"
            placeholder="ex: sahabatsejati"
            id="username"
            names="username"
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
          />

          {/* Password */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Password*"
            placeholder="Min. 8 characters"
            id="password"
            names="password"
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
          />
          <div className="mb-4 flex items-center justify-end px-2">
            <a
              className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
              href=" "
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
