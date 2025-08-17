import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTiktok, IconBrandX } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { Text } from '@mantine/core';

const Footer = () => {
    return <div className="pb-5 pt-5 flex gap-5 max-[400px]:gap-0 bg-blue-950 justify-around items-center flex-wrap">
        <div className="w-1/4 max-[845px]:w-1/3 max-[450px]:w-full flex flex-col gap-2">
            <div className="max-[450px]:text-center gap-2">
                <Text
                    className="!text-3xl max-[450px]:!text-2xl"
                    fw={900}
                    variant="gradient"
                    gradient={{ from: 'blue', to: 'rgba(255, 255, 255, 1)', deg: 214 }}
                >
                    Uni Connect
                </Text>

                <div className="text-sm text-blue-100">Showcase your profile, upgrade your skills, earn certifications.</div>
            </div>

            <div className="flex gap-5 max-[450px]:mx-5 text-blue-500 justify-evenly [&>div]:bg-gray-300 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer max-[400px]:[&>div]:p-1.5 [&>div:hover]:bg-blue-700 [&>div:hover]:text-white">
                <div><IconBrandFacebook stroke={2} /></div>
                <div><IconBrandInstagram stroke={2} /></div>
                <div><IconBrandX stroke={2} /></div>
                <div><IconBrandTiktok stroke={2} /></div>
                <div><IconBrandLinkedin stroke={2} /></div>
            </div>
        </div>

        <div className="text-blue-200 max-[400px]:p-2">
            <div className="text-2xl max-[400px]:text-xl font-semibold mb-4 text-blue-500">Product</div>
            <div className="text-sm max-[400px]:text-xs">
                <Link to={`/find-job`}>
                    <div className="hover:text-blue-400 cursor-pointer mb-1">Find job</div>
                </Link>
                <div className="hover:text-blue-400 cursor-pointer mb-1">Find Company</div>
            </div>

        </div>

        <div className="text-blue-200">
            <div className="text-2xl max-[400px]:text-xl font-semibold mb-4 text-blue-500">Company</div>
            <div className="text-sm hover:text-blue-400 cursor-pointer mb-1">About Us</div>
            <div className="text-sm hover:text-blue-400 cursor-pointer mb-1">Contact Us</div>
        </div>

        <div className="text-blue-200">
            <div className="text-2xl max-[400px]:text-xl font-semibold mb-4 text-blue-500">Support</div>
            <div className="text-sm hover:text-blue-400 cursor-pointer mb-1">Help & support</div>
            <div className="text-sm hover:text-blue-400 cursor-pointer mb-1">Feedback</div>
        </div>


    </div>
}

export default Footer;