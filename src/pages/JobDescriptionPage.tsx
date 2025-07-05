
import { Link, useParams } from "react-router-dom";
import Footer from "../Footer/Footer"
import Header from "../layouts/Header"
import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import JobDescription from "../JobDescription/JobDescription";
import RecommendedJobs from "../JobDescription/RecomendedJobs";
import { useEffect, useState } from "react";
import { getJob } from "../Services/JobService";

const JobDescriptionPage = () => {
    const { id } = useParams();
    const [job, setjob] = useState<any>(null);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        getJob(id).then((res) => {
            setjob(res);
        }).catch((err) => {
            console.error("Error fetching job details:", err);
        })
    }, [id]);


    console.log("Job ID from params:", id);
    return (
        <div className="bg-gray-100 min-h-[100vh] font-['poppins']">
            <Header />
            <Link className="my-4 inline-block" to="/find-job">
                <Button leftSection={<IconArrowLeft size={20} />} className="!text-blue-700" variant="light">Back</Button>
            </Link>

            <div className="flex gap-5 p-4 justify-around">
                <JobDescription {...job}/>
                <RecommendedJobs />
            </div>
            <Footer />
        </div>

    )
}

export default JobDescriptionPage;