import Header from "../../header/header";
import MainButtons from "../mainButtons/MainButtons";

const ContainerDesktop = ({title, children}) => {
    return(
        <>
            <Header title={title}/>
            <main className="container-desktop">
                <MainButtons />
                {children}               
            </main>            
        </>
    )
}

export default ContainerDesktop