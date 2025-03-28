import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { useLogin } from '../../hooks/queries/useAuth';
import type { LoginUserType } from '../../type/User';
export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  const [credentials, setCredentials] = useState<LoginUserType>({
    email: '',
    password: '',
  });
  const mutation = useLogin();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ email: credentials.email, password: credentials.password });
  };

  return (
    <div className='h-[80vh] flex items-center justify-center'>
      <form onSubmit={handleLogin} className="flex flex-col w-100 h-100 p-3 rounded-xl shadow-[0px_54px_55px_rgba(0,0,0,0.25),0px_-12px_30px_rgba(0,0,0,0.12),0px_4px_6px_rgba(0,0,0,0.12),0px_12px_13px_rgba(0,0,0,0.17),0px_-3px_5px_rgba(0,0,0,0.09)]">
        
        <input
          type="text"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
