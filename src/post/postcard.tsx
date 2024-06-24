import s from "./post.module.css"
import { ChangeEvent, MouseEventHandler, useState, ReactNode } from 'react';
import { Article } from "types/article";
import cup1 from './cup1.png'

type PostCardProps = {
    postData: Article;
}

export const PostCard = (props: PostCardProps) => {
    const{postData} = props;
    const [like, setLike]=useState(postData.like)
    const onLikeClick = () => {
        setLike(like + 1)
    }
    return (    <div className={s.post}> <div className={s.head__card}>{postData.head}</div>
    
    <img className={s.cup1} src={postData.img} alt="" />
    <div >{postData.prise}$</div>
    <button onClick={onLikeClick}>Понравилось: {like}</button>
    </div>)
}