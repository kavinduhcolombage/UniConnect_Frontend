import { Avatar, TextInput } from '@mantine/core';


const DreamJob = () => {
    return (<div className="flex items-center p-20">
        <div className="flex flex-col w-[45%] justify-center">
            <div className="text-6xl font-semibold">Find Your Internship</div>
            <div>good life good company</div>
            <div className='flex items-end'>
                <TextInput
                    label="Search Your job"
                    placeholder="search job"
                />

                <div>
                    {/* <IconSearch></IconSearch> */}
                </div>
            </div>
        </div>
        <div className="w-[55%] flex items-center justify-center">
            <div className="w-[40rem] relative">
                <img src="/images/women bg rem.png" alt="student photo" />
                <div className='absolute -right-5 w-fit top-[50%] border border-blue-500 rounded-lg p-2 backdrop-blur-md'>
                    <div className='text-center mb-1 text-sm'>10k+ got jobs</div>
                    <Avatar.Group>
                        <Avatar src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740" />
                        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy4mrp6VqEE2DSos0eHpGcRHQErgL4EsqtjeL5kzCZ83zrpTxc8jQ6DAeygXwyoCwqk04&usqp=CAU" />
                        <Avatar src="https://static.vecteezy.com/system/resources/previews/004/899/680/non_2x/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg" />
                        <Avatar>+5k</Avatar>
                    </Avatar.Group>
                </div>
                <div className='absolute -left-5 w-fit top-[25%] border border-blue-500 rounded-lg p-2 backdrop-blur-md gap-3 flex flex-col'>
                    <div className='flex gap-2 items-center'>
                        <div className='w-10 h-10 p-1 bg-gray-100 rounded-lg'>
                            <img src="/google.png" alt="" />
                        </div>
                        <div className='text-sm'>
                            <div>Software Engineer</div>
                            <div className='text-xs'>Colombo</div>
                        </div>
                    </div>
                    <div className='flex gap--2 justify-around text-blue-400 text-xs'>
                        <span>1 day ago</span>
                        <span>100+ Applictios</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default DreamJob;