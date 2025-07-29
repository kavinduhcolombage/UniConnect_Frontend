import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
    const links = [
        { name: 'Home', url: '/' },
        { name: 'Find Job', url: '/find-job' },
        { name: 'Find Talents', url: '/find-talents' },
        { name: 'Post Job', url: '/post-job' },
        { name: 'Posted Job', url: '/posted-job/0' },
        { name: 'Job History', url: '/job-history' },
        { name: 'Signup', url: '/signup' },
    ]

    const location = useLocation();
    return (
        <div className='flex gap-4 items-center text-white'>
            {
                links.map((link, index) => (
                    <div key={index} className={`${location.pathname === link.url ? 'border-blue-400 text-blue-300' : ''} border-b-[3px] h-full flex items-center`}>
                        <Link to={link.url}>{link.name}</Link>
                    </div>
                ))
            }
        </div>
    );
}

export default NavLinks;