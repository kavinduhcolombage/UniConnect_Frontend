import { useLocation } from "react-router-dom";
import Login from "../SignUpLogin/Login";
import SignUp from "../SignUpLogin/SignUp";

const SignUpPage = () => {
    const location = useLocation()
    return (
        <div className="min-h-[90vh] bg-gray-100 font-['poppins'] overflow-hidden">
            <div className={`not-first:w-[100vw] h-[100vh] transition-all ease-in-out duration-1000 flex [&>*]:flex-shrink-0 ${location.pathname == '/signup'?'-translate-x-1/2':'transate-x-0'}`}>
                <Login />
                <div className={`w-1/2 h-full transition-all duration-1000 ease-in-out ${location.pathname=="/signup"?"rounded-r-[200px]":"rounded-l-[200px]"} bg-blue-500 flex flex-col items-center justify-center gap-5`}>
                    <div className='flex items-center gap-2'>
                        <div className='text-5xl font-semibold text-white'>Uni Connect</div>
                    </div>
                    <div className="text-2xl font-semibold">Find job to Start Your jerney</div>
                </div>
                <SignUp />
            </div>
        </div>
    )
}

export default SignUpPage;