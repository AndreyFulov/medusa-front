import React from 'react';

const Post = ({ title, desc, image }) => {
  return (
    <div class="content group bg-main rounded-3xl border-2 border-gray-500 py-6 px-6">
      <div>
        <h1 class="active hover-underline-animation">{title}</h1>
      </div>
      <div>
        <p>{desc}</p>
        <img src={image} />
      </div>
    </div>
  );
};

export default Post;
