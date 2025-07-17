const JobCategory = () => {
    return <div className="md:flex hidden">
        <div className="mt-20 pb-5">
        <div className="text-4xl text-center font-semibold mb-3">Browse <span className="text-blue-500">Job</span> Category</div>
        <div className="text-lg mx-auto text-center w-1/2">Explore diverse job opportunities tailored to your skills. Start your career journey today!</div>

        <div className="flex">
            <div className="flex flex-col items-center w-[25%] mx-auto mt-10">
                <div className="p-2 rounded-full">
                    <img className="h-15 w-15" src="/JobCategory/Sales.png" alt="" />
                </div>
                <div className="text-blue-900 text-lg font-semibold">Business Analysis</div>
                <div className="text-sm text-center">Understand business needs and drive smart solutions for success.</div>
                <div className="text-blue-500 text-lg">1k+ job posted</div>
            </div>
            <div className="flex flex-col items-center w-[25%] mx-auto mt-10">
                <div className="p-2 rounded-full">
                    <img className="h-15 w-15" src="/JobCategory/WebDevelop.png" alt="" />
                </div>
                <div className="text-blue-900 text-lg font-semibold">Web Developers</div>
                <div className="text-sm text-center">Craft responsive, modern websites with clean, efficient code.</div>
                <div className="text-blue-500 text-lg">1k+ job posted</div>
            </div>
            <div className="flex flex-col items-center w-[25%] mx-auto mt-10">
                <div className="p-2 rounded-full">
                    <img className="h-15 w-15" src="/JobCategory/Finance.png" alt="" />
                </div>
                <div className="text-blue-900 text-lg font-semibold">Finance</div>
                <div className="text-sm text-center">Manage budgets, analyze trends, and guide smart investments.</div>
                <div className="text-blue-500 text-lg">1k+ job posted</div>
            </div>
            <div className="flex flex-col items-center w-[25%] mx-auto mt-10">
                <div className="p-2 rounded-full">
                    <img className="h-15 w-15" src="/JobCategory/HR.png" alt="" />
                </div>
                <div className="text-blue-900 text-lg font-semibold">Human Resource</div>
                <div className="text-sm text-center">Empower people, shape culture, and build strong teams.</div>
                <div className="text-blue-500 text-lg">1k+ job posted</div>
            </div>
        </div>


    </div>
    </div>
}

export default JobCategory;