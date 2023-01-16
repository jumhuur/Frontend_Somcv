import Dhexmare from "./dhexmare"
import SklatonElemet from "./sklatonselemt"
function Cvskl(){
    return (
        <div className="design">
        <Dhexmare />
        <SklatonElemet type="title"/>
        <SklatonElemet type="price"/>
        <SklatonElemet type="image"/>
        </div>  
    )
}

export default Cvskl