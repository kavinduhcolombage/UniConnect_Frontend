import { Avatar, Rating } from "@mantine/core";

const UserIdeas = () => {
    return <div className="mt-20 pb-5">
        <div className="text-4xl text-center font-semibold mt-3 text-mine-shaft-100">What <span
            className="text-bright-sun-400">User</span> says about us?</div>

        <div className="flex">
            <div className="flex flex-col gap-3 w-[23%] border border-blue-500 rounded-xl mt-10 mx-auto">
                <div className="flex gap-2 items-center">
                    <Avatar className="h-14 w-14" src="avatar.png" alt="it's me" />
                    <div>
                        <div className="text-lg font-semibold">Shivam Patel</div>
                        <Rating value={3.5} fractions={2} readOnly />
                    </div>
                </div>
                <div className="text-sm p-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat provident laudantium delectus deleniti pariatur dolor ipsa perspiciatis ad? Iure, cum incidunt! Ipsa fugit unde velit saepe, maiores odit quasi assumenda.</div>
            </div>

            <div className="flex flex-col gap-3 w-[23%] border border-blue-500 rounded-xl mt-10 mx-auto">
                <div className="flex gap-2 items-center">
                    <Avatar className="h-14 w-14" src="avatar.png" alt="it's me" />
                    <div>
                        <div className="text-lg font-semibold">Shivam Patel</div>
                        <Rating value={3.5} fractions={2} readOnly />
                    </div>
                </div>
                <div className="text-sm p-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat provident laudantium delectus deleniti pariatur dolor ipsa perspiciatis ad? Iure, cum incidunt! Ipsa fugit unde velit saepe, maiores odit quasi assumenda.</div>
                
            </div>
            <div className="flex flex-col gap-3 w-[23%] border border-blue-500 rounded-xl mt-10 mx-auto">
                <div className="flex gap-2 items-center">
                    <Avatar className="h-14 w-14" src="avatar.png" alt="it's me" />
                    <div>
                        <div className="text-lg font-semibold">Shivam Patel</div>
                        <Rating value={3.5} fractions={2} readOnly />
                    </div>
                </div>
                <div className="text-sm p-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat provident laudantium delectus deleniti pariatur dolor ipsa perspiciatis ad? Iure, cum incidunt! Ipsa fugit unde velit saepe, maiores odit quasi assumenda.</div>
                
            </div>
            <div className="flex flex-col gap-3 w-[23%] border border-blue-500 rounded-xl mt-10 mx-auto">
                <div className="flex gap-2 items-center">
                    <Avatar className="h-14 w-14" src="avatar.png" alt="it's me" />
                    <div>
                        <div className="text-lg font-semibold">Shivam Patel</div>
                        <Rating value={3.5} fractions={2} readOnly />
                    </div>
                </div>
                <div className="text-sm p-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat provident laudantium delectus deleniti pariatur dolor ipsa perspiciatis ad? Iure, cum incidunt! Ipsa fugit unde velit saepe, maiores odit quasi assumenda.</div>
                
            </div>
        </div>



    </div>;
};

export default UserIdeas;