
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer"
import Header from "../layouts/Header"
import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import Profile from "../TalentProfile/Profile";

const TalentProfilePage = () => {
    return (
        <div className="bg-gray-100 min-h-[100vh] font-['poppins'] p-4">
            <Header />
            <Link className="my-4 inline-block" to="/find-talents">
                <Button  leftSection={<IconArrowLeft size={20}/>} className="!text-blue-700" variant="light">Back</Button>
            </Link>

            <div className="flex gap-5">
        <Profile/>
            </div>
            <Footer />
        </div>
        
    )
}

export default TalentProfilePage;