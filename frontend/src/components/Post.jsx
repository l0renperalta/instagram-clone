import React from 'react';
import profile from '../assets/post/profile.jpg';
import post1 from '../assets/post/post1.jpg';

const Post = () => {
  return (
    <section className="px-3 py-3 text-gray-800">
      <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-2">
          <img src={profile} alt="millionaires-formula" className="w-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-0.5" />
          <h6 className="font-medium text-sm">millionairesformula</h6>
          <span className="text-gray-500 text-2xl">&middot;</span>
          <span className="text-gray-500 text-xs">3 m</span>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256" className="text-gray-800 fill-current cursor-pointer hover:text-gray-800">
            <path d="M112 60a16 16 0 1 1 16 16a16 16 0 0 1-16-16Zm16 52a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm0 68a16 16 0 1 0 16 16a16 16 0 0 0-16-16Z" />
          </svg>
        </div>
      </div>
      <div className="py-3">
        <img src={post1} alt="meme-1" className="rounded" />
      </div>

      <div className="flex justify-between">
        <div className="flex space-x-4">
          <svg
            aria-label="Like"
            className="x1lliihq x1n2onr6 cursor-pointer hover:fill-red-500"
            color="#000"
            fill="#000"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>Like</title>
            <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
          </svg>
          <svg
            aria-label="Comment"
            className="x1lliihq x1n2onr6 cursor-pointer hover:text-gray-500"
            color="#000"
            fill="#000"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>Comment</title>
            <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path>
          </svg>
          <svg
            aria-label="Share Post"
            className="x1lliihq x1n2onr6 cursor-pointer hover:text-gray-500"
            color="#000"
            fill="#000"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>Share Post</title>
            <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line>
            <polygon
              fill="none"
              points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="2"
            ></polygon>
          </svg>
        </div>
        <div>
          <svg aria-label="Save" className="x1lliihq x1n2onr6 cursor-pointer" color="#000" fill="#000" height="24" role="img" viewBox="0 0 24 24" width="24">
            <title>Save</title>
            <polygon
              fill="none"
              points="20 21 12 13.44 4 21 4 3 20 3 20 21"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></polygon>
          </svg>
        </div>
      </div>
      <div className="my-2 font-medium text-sm">4,047 likes</div>
      <div className="flex space-x-2 text-sm">
        <a href="https://www.instagram.com/millionairesformula/" className="font-medium">
          millionairesformula
        </a>
        <p>Just Don’t give up👊🔥...</p>
      </div>
      <div className="text-sm text-gray-500 py-2 cursor-pointer">View all 13 comments</div>
    </section>
  );
};

export default Post;
