import React from 'react';
import Header from '../components/Header';
import Post from '../components/Post';
import Stories from '../components/Stories';
import Suggestions from '../components/Suggestions';

const Home = () => {
  return (
    <main className="py-6 px-4 mx-auto" style={{ maxWidth: 840 }}>
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-7">
          <Stories />

          <Post />
          <Post />
          <Post />
        </div>
        <div className="col-span-5">
          <Suggestions />
        </div>
      </div>
    </main>
  );
};

export default Home;
