import React from 'react'
import useBlogs from '../features/Blogs/useBlogs'
import { PropagateLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

const Blog = () => {
  const {isLoading, blogs, error} = useBlogs()
  
  let content;

  if(isLoading) content = <PropagateLoader />
  content = blogs?.map(blog => (
    <div key={blog.id} className='flex items-center justify-between p-2'>
      <Link to={`/blogpost/:${blog.id}`}>
        <h3>{blog.heading}</h3>
        <img src={blog.blog_image} alt={blog.heading} className='lg:h-[400px] lg:w-[400px] object-cover' />
        <p>{`${blog.content.slice(0, 30)} read more...`}</p>
      </Link>
      {blog.id !== blogs.length && <div className='w-[1px] h-full bg-gray-500'></div>}
    </div>
  ))

  return (
    <section className='border-b mt-20 p-4 mb-10'>
      <h3 className='text-center mb-4 font-semibold'>Join me in this journey</h3>
      <div className='lg:grid grid-cols-3'>
        {blogs.length ? content : (
          <p>
            I am working to give you some some content...I will upload as soon as possible.
            <br></br>
            <Link className='text-blue-900 font-semibold text-center' to="/">Go back to home page</Link>
          </p>
        ) }
      </div>
      
    </section>
  )
}

export default Blog