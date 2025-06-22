import '../../styles/css/header/header.css'

const Header = ({title}) => {
    return(
        <>
            <header>
                <button className="home-button">
                    <a href="/">Início</a>
                </button>
                <div className="title-container">
                    {title}
                </div>                                
            </header>
        </>
    )
}

export default Header