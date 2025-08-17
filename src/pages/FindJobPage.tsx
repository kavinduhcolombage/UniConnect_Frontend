import Jobs from "../FindJob/Jobs";
import SearchBar from "../FindJob/SearchBar";
import Footer from "../Footer/Footer";
import Header from "../layouts/Header";

const FindJob = () => {
    return (
        <div>
            <Header />
            <div className="bg-gray-100 min-h-[100vh] font-['poppins']">
                <SearchBar />
                <Jobs />
            </div>
            <Footer />
        </div>


    )
}

export default FindJob;