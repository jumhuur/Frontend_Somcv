import Dhexmare from "./dhexmare"
import SklatonElemet from "./sklatonselemt"
function Jobskalaton() {
    return (
        <div className="jobs_in_job">
            <Dhexmare />
            <div className="logo_job">
                <SklatonElemet type="image_job"/>
                <SklatonElemet type="image_job"/>
            </div>
            <div className="info_and_title">
                <SklatonElemet type="title" />
                <div className="info sk">
                    <SklatonElemet type="price" />
                    <SklatonElemet type="price" />
                </div>
            </div>
            <div className="actions_btn">
                <SklatonElemet type="btn"/>
                <SklatonElemet type="price"/>
            </div>
        </div>
    )
}


export default Jobskalaton