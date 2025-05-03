import { TextInput , PasswordInput , Button } from '@mantine/core';
import { IconAt, IconLock } from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../Services/UserService';

const form = {
    email: "",
    password: "",

}

const Login = () => {
    const [value, setValue] = useState('react');
    const [error, setError] = useState(""); // State for error message

    const [data, setData] = useState(form);

    const handleChange = (event: any) => {
        console.log(event.target);
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const handleSubmit = () => {
        loginUser(data).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
            if (err.response && err.response.data) {
                setError(err.response.data); // Set error message from response
            } else {
                setError("An unexpected error occurred."); // Fallback error message
            }
        });
    }


    return <div className="w-1/2 px-15 flex flex-col items-center justify-center gap-5">
        <div className="text-2xl font-semibold ">Log in to your Account</div>
        <div className='flex flex-col gap-2.5'>
            <div>
                <TextInput
                    value={data.email}
                    name='email'
                    onChange={handleChange}
                    withAsterisk
                    leftSection={<IconAt size={16} />}
                    label="Email"
                    placeholder="Your email"

                />
            </div>
            <div>
                <PasswordInput value={data.password} name='password' onChange={handleChange} withAsterisk leftSection={<IconLock size={18} stroke={1.5} />} label="Password" placeholder="Password" />
            </div>
            {error && <div className="text-red-500">{error}</div>}
            <Button variant="filled" size="md" radius="md" onClick={handleSubmit}>Log In</Button>

            <div className='mx-auto'>Don't have an account ? <Link to="/signup" className='text-blue-500 hover:underline'>Sign Up</Link></div>

        </div>
    </div>
}

export default Login;