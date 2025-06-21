import './header.css'

const Header = ({title}) => {
    return(
        <>
            <header>
                <div className="title-container">
                    {title}
                </div>                                
            </header>
        </>
    )
}

export default Header