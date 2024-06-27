import { createBrowserRouter, createHashRouter } from "react-router-dom";
import  {MainPage} from "pages/mainPage";
import  {InfoPage} from "pages/infoPage";
import { Root } from "Root";
import { ROUTES } from "./routes";
import { HelpPage } from "pages/helpPage";
import { CatalogPage } from "pages/catalogPage";
import { ArticlePage } from "pages/idPage";
import { Corzina } from "pages/corzina";


export const router = createHashRouter([
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
        {
            path:ROUTES.CORZINA,
             element: <Corzina/>,
        },
        {
            path: `${ROUTES.ARTICLE}/:id`,
            element: <ArticlePage/>
        }
]}
]);