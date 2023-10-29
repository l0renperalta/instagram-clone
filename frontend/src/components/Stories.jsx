import { useEffect, useRef, useState } from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import profile from '../assets/post/profile.jpg';

const Stories = () => {
  return (
    <div className="flex relative">
      <div className="border bg-white flex space-x-4 flex-1 flex-nowrap overflow-hidden p-4 rounded-xl mb-4 relative">
        <div className="cursor-pointer">
          <div className="h-16 w-16 flex items-center justify-center bg-neutral-200 rounded-full bg-gradient-to-t from-[#f09433] via-[#dc2743] to-[#bc1888]">
            <img src={profile} alt="avatar" className="rounded-full h-14 w-14 outline outline-white" />
          </div>
        </div>
        <div className="cursor-pointer">
          <div className="h-16 w-16 flex items-center justify-center bg-neutral-200 rounded-full bg-gradient-to-t from-[#f09433] via-[#dc2743] to-[#bc1888]">
            <img src={profile} alt="avatar" className="rounded-full h-14 w-14 outline outline-white" />
          </div>
        </div>
        <div className="cursor-pointer">
          <div className="h-16 w-16 flex items-center justify-center bg-neutral-200 rounded-full bg-gradient-to-t from-[#f09433] via-[#dc2743] to-[#bc1888]">
            <img src={profile} alt="avatar" className="rounded-full h-14 w-14 outline outline-white" />
          </div>
        </div>
        <div className="cursor-pointer">
          <div className="h-16 w-16 flex items-center justify-center bg-neutral-200 rounded-full bg-gradient-to-t from-[#f09433] via-[#dc2743] to-[#bc1888]">
            <img src={profile} alt="avatar" className="rounded-full h-14 w-14 outline outline-white" />
          </div>
        </div>
        <div className="cursor-pointer">
          <div className="h-16 w-16 flex items-center justify-center bg-neutral-200 rounded-full bg-gradient-to-t from-[#f09433] via-[#dc2743] to-[#bc1888]">
            <img src={profile} alt="avatar" className="rounded-full h-14 w-14 outline outline-white" />
          </div>
        </div>
        <div className="cursor-pointer">
          <div className="h-16 w-16 flex items-center justify-center bg-neutral-200 rounded-full bg-gradient-to-t from-[#f09433] via-[#dc2743] to-[#bc1888]">
            <img src={profile} alt="avatar" className="rounded-full h-14 w-14 outline outline-white" />
          </div>
        </div>
      </div>
      <div className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-1.5 shadow-xl cursor-pointer">
        <IoChevronBackOutline />
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-1.5 shadow-xl cursor-pointer">
        <IoChevronForwardOutline />
      </div>
    </div>
  );
};

export default Stories;
