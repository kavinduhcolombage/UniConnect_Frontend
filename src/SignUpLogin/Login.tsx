import { TextInput, Checkbox, PasswordInput, Anchor, Button } from '@mantine/core';
import { IconAt, IconLock } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const Login=()=>{
    return <div className="w-1/2 px-15 flex flex-col items-center justify-center gap-5">
            <div className="text-2xl font-semibold ">Log in to your Account</div>
            <div className='flex flex-col gap-2.5'>
                <div>
                    <TextInput
                        withAsterisk
                        leftSection={<IconAt size={16} />}
                        label="Email"
                        placeholder="Your email"
                    />
                </div>
                <div>
                    <PasswordInput withAsterisk leftSection={<IconLock size={18} stroke={1.5} />} label="Password" placeholder="Password" />
                </div>
                <Button variant="filled" size="md" radius="md">Sign Up</Button>
    
                <div className='mx-auto'>Don't have an account ? <Link to="/signup" className='text-blue-500 hover:underline'>Sign Up</Link></div>
    
            </div>
        </div>
}

export default Login;