import {BLOGS} from "../../utils/constants/blog"
import BlogItem from "./BlogItem"

const BlogList = () => {
   return (
      <div>
         {BLOGS.map(blog => (
            <BlogItem key={blog.id} {...blog} />
         ))}
      </div>
   )
}

export default BlogList
