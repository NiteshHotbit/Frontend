import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import mainImage from '../../assets/mainImage.png';
import { Google, Iphone } from '../../icons';
import { Button, InputField } from '../atoms';

export const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [isError, isSetError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="hidden md:flex bg-black items-center justify-center">
        <img src={mainImage} alt="Visual" className="w-[80%]" />
      </div>

      <div className="flex flex-col justify-center px-20 md:px-20 lg:px-32 xl:px-60 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign up</h2>
        {isError && (
          <div className="text-red-600 text-sm mb-4 text-center">{isError}</div>
        )}
        <form onSubmit={handleSubmit}>
          <InputField
            label="Full Name"
            name="username"
            value={formData.username}
            onChange={handleChange}
            icon={<FaUser />}
          />
          <InputField
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            icon={<FaEnvelope />}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            icon={<FaLock />}
          />

          <Button type="submit" variant="primary">
            Sign up
          </Button>
          <div className="flex items-center my-6">
            <hr className="flex-grow border-t" />
            <span className="mx-4 text-gray-400">Or</span>
            <hr className="flex-grow border-t" />
          </div>
          <div className="flex gap-4 text-sm justify-between">
            <Button
              variant="outline"
              className="flex justify-center items-center"
            >
              <Iphone className="w-10" />
              Sign up with Apple
            </Button>
            <Button
              variant="outline"
              className="flex justify-center items-center"
            >
              <Google className="w-8 h-5" />
              Sign up with Google
            </Button>
          </div>
        </form>

        <p className="text-sm text-center mt-6 text-gray-400">
          Already have an account?{' '}
          <Link to="/" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};
