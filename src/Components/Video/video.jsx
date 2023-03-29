import React from 'react';
import { Player } from 'video-react';
import { Link } from "react-router-dom";
function  HelpVideo({active,func}){
    return(
        <>
        <div className={active ? "Over_my_help_video active" : "Over_my_help_video"}>
            <div className="video">
            <div className="close" onClick={func}>
                <Link>
                <div className="close_here video">
                <i className="fa-solid fa-xmark"></i>
                </div>
                </Link>
                {/* <div  onClick={onclickpop} className="close_here">
                <i className="fa-solid fa-xmark"></i>
                </div> */}
            </div>
                <div className="vide_content">
                {active ? 
                    <Player
                    playsInline
                    // poster="/Images/Web.png"
                    src="/videos/Video.mp4"
                    autoPlay
                />
                :<></>
                }
                </div>
            </div>
        </div>
        </>
    )
}


export default HelpVideo