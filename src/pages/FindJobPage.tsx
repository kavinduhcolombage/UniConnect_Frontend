import Jobs from "../FindJob/Jobs";
import SearchBar from "../FindJob/SearchBar";
import Footer from "../Footer/Footer";
import Header from "../layouts/Header";

const FindJob = () => {
    return (
        <div className="bg-gray-100 min-h-[100vh] font-['poppins']">
            <Header />
            <SearchBar />            
            <Jobs />
            <Footer />
        </div>
        
    )
}

export default FindJob;