import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import Footer from "../Footer/Footer";
import ApplyJobComp from "../ApplyJob/ApplyJobComp";

const ApplyJObPage = () => {
    
    return <div className="bg-gray-100 min-h-[100vh] font-['poppins']">
    <Header />
    <Link className="my-4 inline-block" to="/find-job">
        <Button leftSection={<IconArrowLeft size={20} />} className="!text-blue-700" variant="light">Back</Button>
    </Link>
    <ApplyJobComp/>

    <Footer />
</div>
}

export default ApplyJObPage;
