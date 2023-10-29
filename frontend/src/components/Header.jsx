import React, { useState } from 'react';
import logo from '../assets/logo.png';
import {
  IoSearchOutline,
  IoHomeOutline,
  IoChatbubbleOutline,
  IoAddCircleOutline,
  IoCompassOutline,
  IoHeartOutline,
  IoPersonCircleOutline,
  IoBookmarkOutline,
  IoCogOutline,
  IoSyncOutline,
} from 'react-icons/io5';
import profile from '../assets/post/profile.jpg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [userOptionsOpen, setUserOptionsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 border-b bg-white z-20">
      <div className="container mx-auto p-4 flex items-center justify-between relative" style={{ maxWidth: 940 }}>
        <img src={logo} alt="instagram wordmark" className="h-7 -mb-2 hover:cursor-pointer" onClick={() => navigate('/')} />
        <div className="absolute left-1/2 -translate-x-1/2 bg-neutral-200 py-1.5 px-4 flex items-center rounded-md space-x-2">
          <IoSearchOutline className="text-neutral-400 text-xl" />
          <input type="text" className="outline-none bg-transparent" placeholder="Search" />
        </div>
        <div className="flex items-center space-x-5 text-2xl">
          <IoHomeOutline className="cursor-pointer" onClick={() => navigate('/')} />
          <IoChatbubbleOutline className="cursor-pointer" />
          <IoAddCircleOutline className="cursor-pointer" />
          <IoCompassOutline className="cursor-pointer" />
          <IoHeartOutline className="cursor-pointer" />
          <div className="relative">
            <div className={`rounded-full flex items-center justify-center h-7 w-7`}>
              <img src={profile} className={`cursor-pointer rounded-full h-6 w-6 outline outline-white`} onClick={() => setUserOptionsOpen((prev) => !prev)} />
            </div>
            {userOptionsOpen ? (
              <div className="absolute top-9 -left-48 shadow-md bg-white rounded-md">
                {[
                  { icon: <IoPersonCircleOutline />, label: 'Profile' },
                  { icon: <IoBookmarkOutline />, label: 'Saved' },
                  { icon: <IoCogOutline />, label: 'Settings' },
                  { icon: <IoSyncOutline />, label: 'Switch Accounts' },
                ].map((option) => (
                  <div
                    key={option.label}
                    className="flex px-3 py-2.5 items-center space-x-2 w-56 cursor-pointer text-xl hover:bg-neutral-50 active:bg-neutral-200"
                    onClick={() => navigate('/profile')}
                  >
                    {option.icon}
                    <p className="text-sm">{option.label}</p>
                  </div>
                ))}
                <div
                  onClick={() => navigate('/login')}
                  className="flex p-3 items-center space-x-2 w- cursor-pointer text-xl border-t hover:bg-neutral-50 active:bg-neutral-200"
                >
                  <p className="text-sm">Log Out</p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
