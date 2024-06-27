import s from './pages.module.css'
import { moskPosts } from "model/moskPosts"
import { PostCard } from "post/postcard"


export const Corzina =()=>{
    
    return <div className={s.corzina}>
  {moskPosts.map((article, index) => (
 article.corzina && <PostCard postData={article} key={index} />
))}
<div className={s.koplate}>К оплате: 650 руб.</div>

    <button className={s.button__oform}>оформить</button>

    </div>
}