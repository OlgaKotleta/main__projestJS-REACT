// import { ChangeEvent, MouseEventHandler, useState, ReactNode } from 'react';
import { RouterProvider } from 'react-router-dom';
import './global.css';
import {PostCard } from './post/postcard';
import { moskPosts } from 'model/moskPosts';
import { PageWrapper } from 'PageWrapper/PageWrapper';
import { router } from 'router';



export const App=()=>{
    // const [count, setCount] = useState(0);
    // const onButtonClick:MouseEventHandler<HTMLButtonElement> = e =>{
    //     setCount(count+1)
    // }

    

 return <RouterProvider router={router} />;
}