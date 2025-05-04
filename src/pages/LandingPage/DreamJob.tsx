import { TextInput } from '@mantine/core';


const DreamJob = () => {
    return ( <div className="flex items-center p-20">
            <div className="flex flex-col w-[45%] justify-center">
                <div className="text-6xl font-semibold">Find Your Internship</div>
                <div>good life good company</div>
                <div className='flex items-end'>
                    <TextInput
                        label="Input label"
                        placeholder="search job"
                    />

                    <div>
                    {/* <IconSearch></IconSearch> */}
                    </div>
                </div>
            </div>
            <div className="w-[55%] flex items-center justify-center">
                <div className="w-[40rem]">
                    <img src="/images/women bg rem.png" alt="student photo" />
                </div>
            </div>
        </div>
    )
}

export default DreamJob;