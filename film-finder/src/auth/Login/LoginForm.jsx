import { useState } from 'react';
import FormInput from '../../components/FormInput.jsx';
import Button from '../../components/Button.jsx';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <FormInput
                label="Username"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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