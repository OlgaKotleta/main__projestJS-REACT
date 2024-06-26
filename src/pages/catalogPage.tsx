import { moskPosts } from "model/moskPosts"
import { PostCard } from "post/postcard"
import s from './pages.module.css'

export const CatalogPage =()=>{
   return  <div className={s.catalog}>
   {moskPosts.map((article, index) => (
<PostCard postData={article} key={index} />
))}
</div>
}