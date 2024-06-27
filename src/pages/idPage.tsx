// import { PostCardid } from "post/postcardid"
import s from './pages.module.css'
import { Article } from "post/Article";
import { useParams } from "react-router-dom";




    export const ArticlePage = () => {
        const { id } = useParams();
       return <div className={s.Article}>  <Article id={Number(id)} /></div>
    }
    
// Number(id)