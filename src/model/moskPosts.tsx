import {Article} from 'types/article'
import img1 from 'post/cup1.png'
import img2 from 'post/cup2.png'
import img3 from 'post/cup3.png'
import img4 from 'post/cup4.png'

export const moskPosts:Article[]=[{
    id:1,
    like:1,
    prise:250,
    head: 'Лимонад "ЛаймТайм"',
img:img1
},
    {
        id:2,
        like:1,
        prise:279,
        head: 'Мятный чай "ColdTea"',
        img:img2},
        {
            id:3,
            like:3,
            prise:310,
            head: 'Кофе "ColdCoffee"',
            img:img3},
            {
                id:4,
                like:4,
                prise:340,
                head: ' Каппучино "SevenRed" ',
                img:img4},

]