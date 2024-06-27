import { useState } from "react";
import s from './post.module.css'
import icon from './serdt.png'
import icon1 from './plus.png' 
import { ROUTES } from "router/routes";
import { Link } from "react-router-dom";
import { moskPosts } from "model/moskPosts";

type ArticleProps = {
    id: number;
  };
  
  export const Article = ({ id }: ArticleProps) => {
    const [article, setArticle] = useState(moskPosts.find(article => Number(id) === article.id) ?? null);
    // const [like, setLike]=useState(article.like)
    const [like, setLike] = useState(article ? article.like : 0);
  
    if (!article) return null;
    const onLikeClick = () => {
        setLike(like + 1)}
 
    
    
    return (   <div> <div className={s.postar}> 
   
    <div className={s.head__card}>{article.head}</div>
  
    
    <img className={s.cup1} src={article.img} alt="" />
    <div >{article.prise}руб.</div>
    <div ><img src={icon1} alt="" className={s.icon1} /><img src={icon} alt="" className={s.icon} onClick={onLikeClick} />{like}</div>
   
    </div> <div className={s.content}>{article.content}</div></div>)
// onClick={onLikeClick}
  }