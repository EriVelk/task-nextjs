import{Navbar} from './navbar';

export const Layout = ({children}) =>{
    return(
        <div>
            <Navbar/>
            {children}
        </div>
    )
}