import LayoutIndex from "../Components/Layout/ index"
import PublicRoutes from "./PublicRoutes"

export const IndexRoute=()=>{
    return(
        <LayoutIndex>
         <PublicRoutes/>
        </LayoutIndex>
    )
}