import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Import useNavigate

const LoginRegister = () => {
  const { institution } = useParams(); // Get the institution from the URL
  const navigate = useNavigate(); // Initialize navigate function
  const [isSignUp, setIsSignUp] = useState(false);
  const [rollNumber, setRollNumber] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    if (institution) {
      console.log('Institution:', institution);
    }
  }, [institution]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://127.0.0.1:5000/login',
        {
          institution: institution, // Use the institution from the URL
          roll_number: rollNumber,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json', // Ensure that the content type is JSON
          },
        }
      );
      console.log('Login successful:', response.data);

      // Redirect to InstitutionHome upon successful login
      if (institution) {
        navigate(`/${institution}/home`);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-orange-500">
          {isSignUp ? 'Register' : 'Login'}
        </h2>
        <form onSubmit={isSignUp ? null : handleLogin}>
          {isSignUp && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Institution: {institution} {/* Display institution from URL */}
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Roll Number
            </label>
            <input
              type="text"
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {!isSignUp && (
            <button
              type="submit"
              className="w-full rounded-md bg-orange-500 px-4 py-2 text-white"
            >
              Login
            </button>
          )}
        </form>
        <button
          className="mt-4 w-full rounded-md border border-orange-500 bg-transparent px-4 py-2 text-orange-500"
          onClick={toggleSignUp}
        >
          {isSignUp ? 'Already have an account? Login' : 'New here? Register'}
        </button>
      </div>
    </div>
  );
};

export default LoginRegister;
