import { jobList } from "../Data/JobsData";
import JobCard from "../FindJob/JobCard";

const RecommendedJobs = () => {
    return <div>
    <div className="text-xl font-semibold mb-5">Recommended Jobs</div>
    <div className="flex flex-col flex-wrp gap-5 justify-around">
      {jobList.map((job, index) => index<4 && <JobCard key={index} {...job} />)}
    </div>
  </div>;
}

export default RecommendedJobs;