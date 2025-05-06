const Working = () => {
    return <div className="mt-20 pb-5">
        <div className="text-4xl text-center font-semibold mb-3">How to  <span className="text-blue-500">Apply</span></div>
        <div className="text-lg mx-auto text-center w-1/2">Explore diverse job opportunities tailored to your skills. Start your career journey today!</div>

        <div className="flex px-16 justify-between items-center">
            <div className="">
                <img className="w-[30rem]" src="/images/boy.jpg" alt="working photo" />
            </div>
            <div className="flex flex-col gap-5 w-[60%]">
                <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-blue-300 rounded-full">
                        <img className="h-12 w-18" src="/images/Resume.png" alt="build resume" />
                    </div>
                    <div>
                        <div className="text-blue-700 text-xl font-semibold">Build your resume</div>
                        <div>Create a professional resume that highlights your skills, experience, and achievements to stand out to employers.</div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-blue-300 rounded-full">
                        <img className="h-12 w-18" src="/images/job.png" alt="job" />
                    </div>
                    <div>
                        <div className="text-blue-700 text-xl font-semibold">Apply for job</div>
                        <div>Search and apply for your dream job using our user-friendly platform with thousands of active listings.</div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-blue-300 rounded-full">
                        <img className="h-12 w-18" src="/images/hired.png" alt="hired" />
                    </div>
                    <div>
                        <div className="text-blue-700 text-xl font-semibold">Get Hired</div>
                        <div>Receive interview calls and secure job offers from top companies looking for talent like you.</div>
                    </div>
                </div>
            </div>
        </div>


    </div>
}

export default Working;