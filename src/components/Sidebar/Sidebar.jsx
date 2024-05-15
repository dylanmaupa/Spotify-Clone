import React from 'react';
import { GrHomeRounded } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { BiLibrary } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Sidebar = () => {
    return (
        <div className='w-1/4 sidebar'>
            <div className="nav secondary_bg rounded-lg p-6">
                <div className='flex items-center gap-4'>
                    <GrHomeRounded className='font-bold text-xl' />
                    <span>Home</span>
                </div>
                <div className='flex items-center gap-4 mt-4'>
                    <FiSearch className='font-bold text-xl' />
                    <span>Search</span>
                </div>
            </div>
            <div className="your_library mt-2 secondary_bg rounded-lg p-2">
                <div className='flex justify-between mb-4 items-center gap-4'>
                    <div className='flex gap-2 items-center px-4'>
                        <BiLibrary className='font-bold text-xl' />
                        <span>Your Library</span>
                    </div>
                    <button className='hover:bg-black/25 rounded-[50%] p-2'>
                        <FaPlus className='font-bold text-xl' />
                    </button>
                </div>
                <div className="your_library leading-8 mt-2 tertiary_bg rounded-lg py-6 px-4">
                    <p className='font-bold'>Create your first playlist</p>
                    <p className='font-semibold'>It's easy, we'll help you</p>
                    <button className="rounded-full text-black mt-4 px-4 py-1 bg-white font-semibold">Create Playlist</button>
                </div>
                <div className="your_library leading-8 mt-6 tertiary_bg rounded-lg py-6 px-4">
                    <p className='font-bold'>Let's find some podcasts to follow</p>
                    <p className='font-semibold'>We'll keep you updated on the new episodes</p>
                    <button className="rounded-full text-black mt-4 px-4 py-1 bg-white font-semibold">Browse podcasts</button>
                </div>
            </div>
            <div className="mt-4 px-4 flex flex-wrap gap-4">
                <a className='text-xs text-gray-300 mx-4' href="#">Legal</a>
                <a className='text-xs text-gray-300 mx-4' href="#">Privacy Center</a>
                <a className='text-xs text-gray-300 mx-4' href="#">Privacy Policy</a>
                <a className='text-xs text-gray-300 mx-4' href="#">Cookies</a>
                <a className='text-xs text-gray-300 mx-4' href="#">About Ads</a>
                <a className='text-xs text-gray-300 mx-4' href="#">Accessibility</a>
            </div>
            <button className="mt-4 mx-4 text-sm font-bold border-white border rounded-full flex gap-1 items-center px-3 py-1 text-white">
                <TbWorld />
                English
            </button>
        </div>
    );
};

export default Sidebar;