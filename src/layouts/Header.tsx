
import { Button, Indicator } from '@mantine/core';
import { Settings, Bell } from 'tabler-icons-react';
import NavLinks from './NavLinks';
import ProfileMenu from './ProfileMenu';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getProfile } from '../Services/ProfileService';
import { setProfile } from '../Slices/ProfileSlice';

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user);

    useEffect(() => {
        if (user) {
            getProfile(user.profileId).then((res) => {
                dispatch(setProfile(res));
            }).catch((err) => console.log(err));
        }
    }, []);

    return <div className="w-full bg-gray-900 px-6 h-25 text-white p-4 flex justify-between items-center">

        <div className='flex items-center gap-2 cursor-pointer'>
            <div className='text-2xl font-semibold text-blue-500'>Uni Connect</div>
        </div>

        <div className='md:flex hidden'>
            {NavLinks()}
        </div>

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