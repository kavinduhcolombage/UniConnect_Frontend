const Working = () => {
    return <div className="mt-20 pb-5">
        <div className="text-4xl text-center font-semibold mb-3">How to  <span className="text-blue-500">Apply</span></div>
        <div className="text-lg mx-auto text-center w-1/2">Explore diverse job opportunities tailored to your skills. Start your career journey today!</div>

        <div className="flex px-16 justify-between items-center">
            <div className="">
                <img className="w-[30rem]" src="/google.png" alt="working photo" />
            </div>
            <div className="flex flex-col gap-5 w-[60%]">
                <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-blue-300 rounded-full">
                        <img className="h-12 w-12" src="/google.png" alt="build resume" />
                    </div>
                    <div>
                        <div className="text-red-600 text-xl font-semibold">Build your resume</div>
                        <div className="text-purple-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eveniet fugit, placeat enim asperiores quasi est commodi nesciunt</div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-blue-300 rounded-full">
                        <img className="h-12 w-12" src="/google.png" alt="build resume" />
                    </div>
                    <div>
                        <div className="text-red-600 text-xl font-semibold">Get Hired</div>
                        <div className="text-purple-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eveniet fugit, placeat enim asperiores quasi est commodi nesciunt</div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-blue-300 rounded-full">
                        <img className="h-12 w-12" src="/google.png" alt="build resume" />
                    </div>
                    <div>
                        <div className="text-red-600 text-xl font-semibold">Apply job</div>
                        <div className="text-purple-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eveniet fugit, placeat enim asperiores quasi est commodi nesciunt</div>
                    </div>
                </div>
            </div>
        </div>


    </div>
}

export default Working;