
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer"
import Header from "../layouts/Header"
import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import Profile from "../TalentProfile/Profile";
import RecommendTalent from "../TalentProfile/RecomendedTalent";
import { useEffect, useState } from "react";
import { getAllProfile } from "../Services/ProfileService";

const TalentProfilePage = () => {
    const navigate = useNavigate();
    const [talents, setTalents] = useState<any[]>([]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        getAllProfile().then((res) => {
            setTalents(res);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <div className="bg-gray-100 min-h-[100vh] font-['poppins']">
            <Header />
            <Button onClick={() => navigate(-1)} leftSection={<IconArrowLeft size={20} />} my="sm" className="!text-blue-700" variant="light">Back</Button>
            <div className="flex gap-5 p-4">
                <Profile />
                <RecommendTalent talents={talents} />
            </div>
            <Footer />
        </div>

    )
}

export default TalentProfilePage;