import { Link } from "react-router-dom";
import { jobList } from "../Data/JobsData";
import JobCard from "./JobCard";
import Sort from "./Sort";

const Jobs = () => {
    return <div className="p-5">
        <div className="flex justify-between">
            <div className="text-2xl font-semibold">Recommended job</div>
            <Sort />
        </div>
        <div className="mt-10 flex flex-wrap gap-5">
            {
                jobList.map((job, index) => (
                    <Link
                        key={index}
                        to="/apply-job"
                        className="no-underline text-inherit"
                    >
                        <JobCard {...job} />
                    </Link>
                ))
            }
        </div>


    </div>
}

export default Jobs;