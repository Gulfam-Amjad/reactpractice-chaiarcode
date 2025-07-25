import React from 'react'
import services from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  return (
    
   <Link to={`/post/${$id}`}>
    <div className='bg-gray-100 w-full rounded-full p-4'>
         <div className='justify-center flex mb-4'>
             <img src={services.filePreview(featuredImage)} alt={title} />
         </div>

         <div>
            <h2 className='text-bold font-bold'>
                {title}
            </h2>
         </div>
    </div>
   </Link>

  )
}

export default PostCard