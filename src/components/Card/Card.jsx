import React from 'react';
import './card.css';
import { FaPlay } from 'react-icons/fa';

const Card = () => {
    return (
        <div className='card col-span-1 p-3 rounded-lg'>
            <div className="relative">
                <img src="/assets/cover1.jpeg" alt="" />
                <button className='flex rounded-[50%] items-center play_btn absolute bottom-0 right-0 justify-center p-3 bg-green-500'>
                    <FaPlay className='text-black text-xl'/>
                </button>
            </div>
            <h3 className='text-sm font-semibold my-2'>2024 Champion</h3>
            <p className='text-xs text-gray-400 leading-3'>Lorem ipsum, dolor sit amet consectetur quo quod. Nulla, eligendi.</p>
        </div>
    );
};

export default Card;