import React from "react";
import "./Projects.css"

import WeLoveMoviesSection from "./ProjectsSections/WeLoveMoviesSection";
import GrubDashSection from "./ProjectsSections/GrubDashSection";
import RestaurantSection from "./ProjectsSections/RestaurantSection";
import ThinkfulBnbSection from "./ProjectsSections/ThinkfulBnbSection";


function Projects(){
    return(
        <section id="Projects" className="">
            <div className="col-12 item-align-center">

                <h1 className="fw-bold p-2">Projects</h1>
                    <div>       

                        <WeLoveMoviesSection />

                        <GrubDashSection />                       
                
                        <RestaurantSection />

                        <ThinkfulBnbSection />
                       
                    </div>
        
            </div>
        </section>
        

    )
}
export default Projects