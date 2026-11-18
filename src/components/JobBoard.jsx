import JobCard from "./JobCard";
import { jobs } from "../data/data.js";

function JobBoard() {
    return (
        <section>
            <h2>Jobs</h2>

            {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}

        </section>
    );
}

export default JobBoard;