import { Form, Formik, Field } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import img from '../assets/iphone-with-profile.jpg';
import logo from '../assets/logo.png';
import { useMutation } from '@tanstack/react-query';
import { registerReq } from '../api/users';

const Signup = () => {
  const navigate = useNavigate();

  const registerMutation = useMutation({
    mutationFn: registerReq,
    onSuccess: () => {
      navigate('/login');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img src={img} alt="iPhone with Instagram app" />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
          <h1 className="flex justify-center w-full">
            <img src={logo} alt="Instagram" className="mt-2 w-6/12 mb-4" />
          </h1>

          <Formik
            initialValues={{
              username: '',
              email: '',
              password: '',
            }}
            onSubmit={(values) => {
              registerMutation.mutate(values);
            }}
          >
            <Form>
              <Field
                id="username"
                name="username"
                placeholder="username"
                className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              />
              <Field id="email" name="email" placeholder="Email" className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2" />
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="*******"
                className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              />
              <button type="submit" className="bg-sky-400 my-2 w-full hover:bg-sky-500 p-2 px-5 rounded-full text-white font-bold">
                Sign Up
              </button>
            </Form>
          </Formik>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
          <p className="text-sm">
            Have an account?{` `}
            <Link to="/login" className="font-bold text-blue-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
