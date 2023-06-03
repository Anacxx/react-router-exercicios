import { goToHomePage, goToProfilePage, goToProd } from "../Route/Coordinator"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
export const Header = () => {
    const navigate = useNavigate()
    const params = useParams()
    return(
        <div>
            <button onClick={() => goToHomePage(navigate)}>Ir para Home</button>
            <button onClick={() => goToProfilePage(navigate)}>Ir para Perfil</button>
            <button onClick={() => goToProd(navigate,"idAleatório")}>Ir para Produto </button>
        </div>
    )
}