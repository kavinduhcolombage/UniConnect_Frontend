import Footer from "../Footer/Footer";
import Header from "../layouts/Header";
import Companies from "./LandingPage/Companies";
import DreamJob from "./LandingPage/DreamJob";
import JobCategory from "./LandingPage/JObCategory";
import Subscribe from "./LandingPage/Subscribe";
import UserIdeas from "./LandingPage/UserIdeas";
import Working from "./LandingPage/Working";

const HomePage = () => {
    return (
        <div>
            <Header />
            <div className="bg-gray-100 min-h-[100vh] font-['poppins']">
                <DreamJob />
                <Companies />
                <JobCategory />
                <Working />
                <UserIdeas />
                <Subscribe />
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;