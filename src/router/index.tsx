import { createBrowserRouter } from "react-router-dom";
import  {MainPage} from "pages/mainPage";
import  {InfoPage} from "pages/infoPage";
import { Root } from "Root";
import { ROUTES } from "./routes";
import { HelpPage } from "pages/helpPage";
import { CatalogPage } from "pages/catalogPage";
import { Id } from "pages/idPage";


export const router = createBrowserRouter([
    {
        path:ROUTES.ROOT,
         element: <Root />,
         children:[{
            index:true,
            element:<MainPage/>},
         
         {
            path:ROUTES.INFO,
             element: <InfoPage/>,
        },
        {
            path:ROUTES.HELP,
             element: <HelpPage/>,
        },
        {
            path:ROUTES.CATALOG,
             element: <CatalogPage/>,
        },
        // {
        //     path: `${ROUTES.ID}/:id`,
        //     element: <Id/>
        // }
]}
]);