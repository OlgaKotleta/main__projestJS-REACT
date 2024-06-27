import { moskPosts } from "model/moskPosts"
import { PostCard } from "post/postcard"
import { Link, NavLink } from 'react-router-dom';
import { ROUTES } from "router/routes";

export const MainPage = () =>{
    const startIndex = 0; // начальный индекс
const endIndex = 4; // конечный индекс (не включая)

// const sliceddPosts = moskPosts[1]

const slicedPosts = moskPosts.slice(startIndex, endIndex);
    return (
        <div>
            
            <div className='shapoch'><span className='text text-1'>Coffee time</span> <span className='text text-2'>Love time</span> 
            <img className='img_wellcome' src="data:image/svg+xml,%3Csvg width='350' height='360' viewBox='0 0 350 360' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M190.378 165.614C189.35 142.102 187.983 129.471 174.311 114.032C156.877 94.035 150.38 74.734 164.741 44.9122C168.503 64.9094 169.87 82.8069 183.542 93.6869C197.214 104.567 208.491 134.041 190.378 165.614ZM164.752 165.614C164.062 152.982 163.384 146.661 155.859 137.892C146.628 127.36 142.866 117.187 150.73 101.053C152.786 111.933 153.125 121.409 160.639 127.023C168.153 132.637 174.65 148.783 164.741 165.625L164.752 165.614ZM226.614 276.491H288.827C292.589 276.491 293.956 279.298 291.561 282.453C291.561 282.453 267.291 314.386 233.8 314.386H113.827L56.0656 282.453C53.6703 279.298 54.6984 276.491 58.4609 276.491H119.984C111.442 271.932 98.7875 251.924 98.7875 227.02V174.383H248.5V178.594C253.291 174.383 259.098 172.272 265.245 172.272C273.787 172.272 289.855 181.401 289.855 197.187C289.855 219.991 275.155 228.412 266.612 234.386C266.612 234.386 250.545 247.365 239.269 262.456C235.506 269.125 231.066 274.391 226.625 276.491H226.614ZM265.234 181.76C259.766 181.76 252.93 184.219 248.489 195.447V224.572C248.489 228.435 248.15 232.993 247.461 236.856C254.986 229.131 263.867 223.876 263.867 223.876C269.336 220.014 280.273 212.648 280.273 198.265C280.612 188.092 271.381 181.76 265.234 181.76ZM124.753 185.97H115.183V200.353H124.753V185.97ZM124.753 208.775H115.183V232.286C115.183 232.286 117.917 263.871 137.397 273.336C125.431 258.953 124.753 242.459 124.753 232.286V208.775Z' 
            fill='%238197D3'/%3E%3C/svg%3E" alt="" /> 
            <span className='text text-3'>Take it</span>
            </div>
            <p className='text_novinki'>ГОРЯЧИЕ НОВИНКИ</p>
            <div className='header_bottom'></div>
            <div className='new'>
     


{slicedPosts.map((article, index) => (
  <PostCard postData={article} key={index} />
))}

    </div>
  
    <div className="text__1">Мы понимаем, как иногда хочется насладиться любимым напитком дома. </div>
    <div className="text__2">Удиви своих любимых и насладись ароматным кофем, насыщенным чаем или прохладным домашним лимонадом не выходя из дома!</div>
    <Link className="Link" to={ROUTES.CORZINA} > <button className="button__zakazat">заказать</button></ Link>
    </div>
    )
}