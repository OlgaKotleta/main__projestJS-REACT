import { moskPosts } from "model/moskPosts"
import { PostCard } from "post/postcard"

export const CatalogPage =()=>{
   return  <div className='new'>
   {moskPosts.map((article, index) => (
<PostCard postData={article} key={index} />
))}
</div>
}