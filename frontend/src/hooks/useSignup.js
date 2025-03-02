import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useSignup = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const signup = async (formData) => {
    setError(null);

    try {
      const res = await fetch('http://localhost:4000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Something went wrong');
      }

      const data = await res.json();
      localStorage.setItem('token', data.token);
      navigate('/jobs');
    } catch (error) {
      setError(error.message);
    }
  };

  return { signup, error };
};

export default useSignup;