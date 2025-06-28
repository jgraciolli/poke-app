import { useNavigate } from 'react-router-dom'
import '../../styles/css/header/header.css'

const Header = ({title}) => {
    const navigate = useNavigate()

    return(
        <>
            <header>
                <button className="home-button"
                    onClick={() => navigate('/')}
                >
                    Início
                </button>
                <div className="title-container">
                    {title}
                </div>                                
            </header>
        </>
    )
}

export default Header