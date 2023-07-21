import React from 'react';
import Post from '../components/Post';
import posts from '../posts.json';

const Home = () => {
  return (
    <div>
      {posts.toReversed().map((obj) => (
        <Post key={obj.id} title={obj.title} image={obj.imageUrl} desc={obj.desc} />
      ))}
    </div>
  );
};

export default Home;
