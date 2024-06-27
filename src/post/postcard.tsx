import s from "./post.module.css"
import { ChangeEvent, MouseEventHandler, useState, ReactNode } from 'react';
import { Article } from "types/article";
import icon from './serdt.png'
import icon1 from './plus.png'
import { Link } from "react-router-dom";
import { ROUTES } from "router/routes";


type PostCardProps = {
    postData: Article;
}

export const PostCard = (props: PostCardProps) => {
    const{postData} = props;
    const [like, setLike]=useState(postData.like)
    const onLikeClick = () => {
        setLike(like + 1)
    }
    return (    <div className={s.post}> 
    <Link className="Link" to={`${ROUTES.ARTICLE}/${postData.id}`}>
    <div className={s.head__card}>{postData.head}</div>
    </Link>
    
    <img className={s.cup1} src={postData.img} alt="" />
    <div >{postData.prise}руб.</div>
    <div ><img src={icon1} alt="" className={s.icon1} /><img src={icon} alt="" className={s.icon} onClick={onLikeClick} />{like}</div>
    </div>)
}