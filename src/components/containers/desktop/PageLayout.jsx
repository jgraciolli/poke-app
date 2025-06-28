import Header from "../../header/Header";
import Buttons from "./buttons/Buttons";

const PageLayout = ({title, children}) => {
    return(
        <>
            <Header title={title}/>
            <main className="container-desktop">
                <Buttons />
                {children}               
            </main>            
        </>
    )
}

export default PageLayout