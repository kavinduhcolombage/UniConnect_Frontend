
import SearchBar from "../FindTalent/SearchBar";
import Talents from "../FindTalent/Talents";
import Footer from "../Footer/Footer"
import Header from "../layouts/Header"

const FindTalentsPage = () => {
    return (
        <div className="bg-gray-100 min-h-[100vh] font-['poppins']">
            <Header />
            <SearchBar />
            <Talents/>
            <Footer />
        </div>
        
    )
}

export default FindTalentsPage;