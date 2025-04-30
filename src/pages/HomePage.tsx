import Header from "../layouts/Header";
import DreamJob from "./LandingPage/DreamJob";

const HomePage = () => {
    return (
        <div className="bg-gray-100 min-h-[100vh] font-['poppins']">
            <Header />
            <DreamJob />
        </div>
        
    )
}

export default HomePage;