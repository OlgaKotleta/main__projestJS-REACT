import { PageWrapper } from "PageWrapper/PageWrapper"
import { Outlet } from "react-router-dom"


export const Root = () => {
    return (
            <PageWrapper>
                <Outlet/>
            </PageWrapper>
    )
}