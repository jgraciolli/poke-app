import Header from "../../header/Header";
import Buttons from "./buttons/Buttons";

const ContainerDesktop = ({title, children}) => {
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

export default ContainerDesktop