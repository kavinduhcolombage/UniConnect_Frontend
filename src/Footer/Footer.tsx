import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTiktok, IconBrandX } from "@tabler/icons-react";

const Footer = () => {
    return <div className="mt-20 pb-5 flex gap-5 bg-blue-900 justify-around items-center">
        <div className="w-1/4 flex flex-col gap-2">
            <div className='flex items-center gap-2'>
                <div className='text-3xl font-semibold text-blue-500 p-2'>Uni Connect</div>
            </div>
            <div className="text-sm">Job portal with user profile, sill updates , certifications</div>
            <div className="flex gap-5 text-blue-500 justify-evenly [&>div]:bg-gray-300 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer [&>div:hover]:bg-gray-500">
                <div><IconBrandFacebook /></div>
                <div><IconBrandInstagram /></div>
                <div><IconBrandX /></div>
                <div><IconBrandTiktok /></div>
                <div><IconBrandLinkedin /></div>
            </div>
        </div>

        <div>
            <div className="text-2xl font-semibold mb-4 text-blue-500">product</div>
            <div className="text-sm hover:text-blue-300 cursor-pointer mb-1">Find job</div>
            <div className="text-sm hover:text-blue-300 cursor-pointer mb-1">Find Company</div>            
        </div>

        <div>
            <div className="text-2xl font-semibold mb-4 text-blue-500">Company</div>
            <div className="text-sm hover:text-blue-300 cursor-pointer mb-1">About Us</div>
            <div className="text-sm hover:text-blue-300 cursor-pointer mb-1">Contact Us</div>            
        </div>

        <div>
            <div className="text-2xl font-semibold mb-4 text-blue-500">Support</div>
            <div className="text-sm hover:text-blue-300 cursor-pointer mb-1">Help & support</div>
            <div className="text-sm hover:text-blue-300 cursor-pointer mb-1">Feedback</div>            
        </div>


    </div>
}

export default Footer;