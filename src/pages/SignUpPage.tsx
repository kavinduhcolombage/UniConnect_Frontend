import { useLocation, useNavigate } from "react-router-dom";
import { Suspense, lazy } from 'react';
import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
// import Login from "../SignUpLogin/Login";
// import SignUp from "../SignUpLogin/SignUp";
const Login = lazy(() => import('../SignUpLogin/Login'));
const SignUp = lazy(() => import('../SignUpLogin/SignUp')); // Lazy load the SignUp component

const SignUpPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <Suspense fallback={<div>Loading...</div>}>
        <div className="min-h-[90vh] bg-gray-100 font-['poppins'] overflow-hidden relative">
            <Button leftSection={<IconArrowLeft size={20} />} className="!text-blue-700 !bg-blue-100 !border-blue-600 !rounded-lg !absolute left-7 top-5 z-10" my="md" variant="light" onClick={() => navigate("/")}>Home</Button>
            <div className={`not-first:w-[100vw] h-[100vh] transition-all ease-in-out duration-1000 flex [&>*]:flex-shrink-0 ${location.pathname == '/signup' ? '-translate-x-1/2' : 'transate-x-0'}`}>
                {/* <Login /> */}
                
                    <Login />
                
                <div className={`w-1/2 h-full transition-all duration-1000 ease-in-out ${location.pathname == "/signup" ? "rounded-r-[200px]" : "rounded-l-[200px]"} bg-blue-500 flex flex-col items-center justify-center gap-5`}>
                    <div className='flex items-cente garp-2'>
                        <div className='text-5xl font-semibold text-white'>Uni Connect</div>
                    </div>
                    <div className="text-2xl font-semibold">Find job to Start Your jerney</div>
                </div>
                {/* <SignUp /> */}
                
                    <SignUp />
                
            </div>
        </div>
        </Suspense>
    )
}

export default SignUpPage;
