
import { Button, Indicator } from '@mantine/core';
import { Settings, Bell } from 'tabler-icons-react';
import NavLinks from './NavLinks';
import ProfileMenu from './ProfileMenu';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const user = useSelector((state: any) => state.user);
    return <div className="w-full bg-gray-900 px-6 h-25 text-white p-4 flex justify-between items-center">

        <div className='flex items-center gap-2 cursor-pointer'>
            <div className='text-2xl font-semibold text-blue-500'>Uni Connect</div>
        </div>

        {NavLinks()}

        <div className='flex gap-5 items-center justify-around'>
            {user ? <ProfileMenu /> : <Link to="/login">
                <Button variant='subtle' color='blue'>Login</Button>
            </Link>}
            <div className='bg-gray-900 p-1.5 rounded-full cursor-pointer hover:text-blue-500'>
                <Settings size={25} />
            </div>
            <div className='bg-gray-900 p-1.5 rounded-full flex items-center justify-center cursor-pointer hover:text-blue-500'>
                <Indicator inline processing color="blue">
                    <Bell
                        size={25}
                        strokeWidth={1.8}
                    />
                </Indicator>

            </div>

        </div>

    </div>
}

export default Header;