//src/components/Bloggerposts.js
import React from 'react';
import { useParams } from 'react-router-dom';

const bloggers = [
  {
    id: 0,
    name: 'Siri',
    posts: [
      {
        id: 'kudroli-gokarna-temple',
        title: 'Kudroli Gokarna Temple',       
        imageUrl: 'https://i.pinimg.com/originals/40/0f/ff/400fff1dd8c7c78b8eac59cd59e268d5.jpg',
      },
      {
        id: 'kadri-manjunatha-temple',
        title: 'Kadri Manjunatha Temple',       
        imageUrl: 'https://www.mangalatravels.com/wp-content/uploads/2018/10/kadri-manjunatheshwara-temple-main.jpg',
      }
    ],
  },
  {
    id: 1,
    name: 'Vishwa',
    posts: [
      {
        id: 'Pabbas',
        title: 'Pabbas', 
        imageUrl: 'https://b.zmtcdn.com/data/pictures/2/19978722/03384ca8d944fe6695800ee07a1b31f7.jpg', 
      },
      {
        id: 'Fosters',
        title:'Fosters',
        imageUrl: 'https://www.crazymasalafood.com/wp-content/images/17-27.jpg', 
      }
    ],
  },
  
];

function BloggerPosts() {
  const { id } = useParams(); // Access the `id` parameter from the URL
  const blogger = bloggers.find((blogger) => blogger.id === parseInt(id));

  if (!blogger) {
    return <div>Blogger not found!</div>; // Handle case where blogger is not found
  }

  return (
    <div>
      <h2>{blogger.name}'s Posts</h2>
      {blogger.posts.map((post) => (
        <div key={post.id} style={{ marginBottom: '20px' }}>
          <h3>{post.title}</h3>
          <img
            src={post.imageUrl}
            alt={post.title}
            style={{ maxWidth: '50%', height: 'auto', width: '50%' }}
            width="400" // Example width
            height="250" // Example height
          />
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BloggerPosts;
