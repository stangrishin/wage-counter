import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { FirebaseError } from '../types';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      const firebaseError = error as FirebaseError;
      console.error('Error logging in', firebaseError);
      setError(firebaseError.message);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <h2 className='text-2xl font-bold mb-4'>Login</h2>
      <form
        onSubmit={handleLogin}
        className='bg-white p-6 rounded shadow-md w-full max-w-md'
      >
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          className='mb-4 p-2 border rounded w-full'
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          className='mb-4 p-2 border rounded w-full'
        />
        <button
          type='submit'
          className='bg-blue-500 text-white p-2 rounded w-full'
        >
          Login
        </button>
        {error && <p className='text-red-500 mt-4'>{error}</p>}
      </form>
      <p className='mt-4'>
        Don't have an account?{' '}
        <Link to='/register' className='text-blue-500'>
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
