import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../layouts/Header";
import PostedJob from "../PostedJob/PostedJob";
import PostedJobDesc from "../PostedJob/PostedJobDesc";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getJobPostedBy } from "../Services/JobService";

const PostedJobPage = () => {
    const {id} = useParams();
    const user = useSelector((State:any)=>State.user);
    const [jobList, setJobList] = useState<any[]>([]);
    const [job, setJob] = useState<any>({});
    const navigate = useNavigate();

    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
        getJobPostedBy(user.id).then((res)=>{
            setJobList(res);
            if(res && res.length>0 && Number(id)==0) navigate(`/posted-job/${res[0].id}`);
            setJob(res.find((item:any)=>item.id==id));
        }).catch((err)=>{
            console.error("Error fetching posted jobs:", err);
        })
    }, [id]);

    return (
        <div>
            <Header />
            <div className="bg-gray-100 min-h-[100vh] font-['poppins']">
                <div className="flex gap-5 ml-5">
                    <PostedJob job={job} jobList={jobList} />
                    <PostedJobDesc {...job} />
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default PostedJobPage;