import { useParams } from "react-router-dom";
import JobCard from "../FindJob/JobCard";
import { useEffect, useState } from "react";
import { getAllJobs } from "../Services/JobService";

const RecommendedJobs = () => {
  const { id } = useParams();
  const [jobList, setJobList] = useState<any>(null);

  useEffect(() => {
    getAllJobs().then((res) => {
      setJobList(res);
    }).catch((err) => {
      console.error("Error fetching jobs:", err);
    })
  }, []);

  return <div>
    <div className="text-xl font-semibold mb-5">Recommended Jobs</div>
    <div className="flex flex-col flex-wrp gap-5 justify-around">
      {jobList?.map((job: any, index: number) => index < 5 && id != job.id && <JobCard key={index} {...job} />)}
    </div>
  </div>;
}

export default RecommendedJobs;