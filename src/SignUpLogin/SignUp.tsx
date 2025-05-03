import { TextInput, Checkbox, PasswordInput, Anchor, Button, Radio, Group } from '@mantine/core';
import { IconAt, IconLock } from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../Services/UserService';
import { signupValidation } from '../Services/FormValidation';

const form = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role:"STUDENT",

}

const SignUp = () => {

    const [value, setValue] = useState('react');

    const [data, setData] = useState<{[key:string]:string}>(form);
    const [formError, setformError] = useState<{[key:string]:string}>(form); // State for error message

    const handleChange = (event: any) => {
        if(typeof(event)=="string"){
            setData({...data, role:event});
            return;
        }
        let name = event.target.name;
        let value = event.target.value;
        setData({ ...data, [name]: value });
        setformError({ ...formError, [name]: signupValidation(name, value) }); // Reset error message for the field being changed
        if (name === "confirmPassword") {
            if (value !== data.password) {
                setformError({ ...formError, [name]: "passwords do not match" });
            } else {
                setformError({ ...formError, [name]: "" });
            }
        }
        
    }

    const handleSubmit = () => {
        let valid=true , newFormErrror:{[key:string]:string}={};
        for(let key in data){
            if(key==="role") continue;
            if(key!=="confirmPassword")newFormErrror[key]=signupValidation(key, data[key]);
            else if(data[key]!==data["password"]) newFormErrror[key]="passwords do not match";
            if(newFormErrror[key]!=="" && newFormErrror[key]!==undefined) valid=false;
        }
        setformError(newFormErrror);
        console.log('helooooo')
        console.log(valid);
        if(valid===true){
            registerUser(data).then((res)=>{
                console.log(res)
                
            }).catch((err)=>{
                console.log(err);
            })
        }
        
    }



    return <div className="w-1/2 px-15 flex flex-col items-center justify-center gap-5">
        <div className="text-2xl font-semibold ">Create Account</div>
        <div className='flex flex-col gap-2.5'>
            <div>
                <TextInput
                    value={data.name}
                    name="name"
                    onChange={handleChange}
                    error={formError.name}
                    withAsterisk
                    label="Full Name"
                    placeholder="Your Name"
                />
            </div>
            <div>
                <TextInput
                    value={data.email}
                    name='email'
                    onChange={handleChange}
                    error={formError.email}
                    withAsterisk
                    leftSection={<IconAt size={16} />}
                    label="Email"
                    placeholder="Your email"
                />
            </div>
            <div>
                <PasswordInput value={data.password} name='password' error={formError.password} onChange={handleChange} withAsterisk leftSection={<IconLock size={18} stroke={1.5} />} label="Password" placeholder="Password" />
            </div>
            <div>
                <PasswordInput value={data.confirmPassword} name='confirmPassword' error={formError.confirmPassword} onChange={handleChange} withAsterisk leftSection={<IconLock size={18} stroke={1.5} />} label="Confirm Password" placeholder="Password" />
            </div>
            <Radio.Group
                value={data.role}
                onChange={handleChange}
                name="role"
                label="Select your Type"
                withAsterisk
            >
                <Group mt="xs">
                    <Radio className='py-4 px-6' value="STUDENT" label="Student" />
                    <Radio className='py-4 px-6' value="COMPANY" label="Company" />
                </Group>
            </Radio.Group>
            <div>
                <Checkbox
                    label={<>I accept{' '}<Anchor>terms & Conditions</Anchor></>}
                />
            </div>
            <Button variant="filled" size="md" radius="md" onClick={handleSubmit}>Sign Up</Button>

            <div className='mx-auto'>Have an account ? <Link to="/login" className='text-blue-500 hover:underline'>Login</Link></div>

        </div>
    </div>
}

export default SignUp;