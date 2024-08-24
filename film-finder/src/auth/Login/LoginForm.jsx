import { useState } from 'react';
import FormInput from '../../components/FormInput.jsx'; // Path ke FormInput.js
import Button from '../../components/Button.jsx'; // Path ke Button.js

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormInput
        label="Email"
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormInput
        label="Password"
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" text="Login" />
    </form>
  );
}

export default LoginForm;