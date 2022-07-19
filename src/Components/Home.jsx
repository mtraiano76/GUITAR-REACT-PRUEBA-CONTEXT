import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"



function Home(props) {


    return (
        <div className="bienvenido">
            <img src="img/gibson.jpg" alt="Guitar Shop" />
            <div className="d-grid gap-2">
             
                <Button as={Link} to={'/galeria/'} variant="galeria" size="lg">GALERIA</Button>
            </div>
        </div>
    )
}

export default Home