import React from 'react';
import Layout from '../../layout/Layout';
import { FaBackward, FaForward, FaGreaterThan, FaLessThan } from 'react-icons/fa';
import Card from '../Card/Card';
import '../../index.css';

const Home = () => {
  return (
    <Layout>
      <div className="flex justify-between items-center mb-2">
        <div className='flex gap-2 items-center'>
          <FaLessThan className='bg-white/10 text-3xl p-1 rounded-[50%]' />
          <FaGreaterThan className='bg-white/10 text-3xl p-1 rounded-[50%]' />
        </div>
        <div>
          <button className="rounded-full mt-4 px-8 py-2 text-base text-white font-semibold">Sign up</button>
          <button className="rounded-full text-black mt-4 px-8 py-3 text-base bg-white font-semibold">Log in</button>
        </div>
      </div>
      <div className="tertiary_bg mx-4 p-4">
        <div className="flex justify-between my-4 items-center">
          <span className='text-2xl font-bold hover:underline cursor-pointer'>Focus</span>
          <span>Show all</span>
        </div>
        <div className='grid gap-6 grid-cols-5'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex justify-between my-4 items-center">
          <span className='text-2xl font-bold hover:underline cursor-pointer'>Spotify Playlist</span>
          <span>Show all</span>
        </div>
        <div className='grid gap-6 grid-cols-5'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </Layout>
  );
};

export default Home;