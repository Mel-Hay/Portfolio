import React from "react";
import "../HomeStyle.css"
import WeLoveMoviesSection from "../ProjectsInHere/WeLoveMoviesSection";
import GrubDashSection from "../ProjectsInHere/GrubDashSection";
import RestaurantSection from "../ProjectsInHere/RestaurantSection";
import ThinkfulBnbSection from "../ProjectsInHere/ThinkfulBnbSection";


function Projects(){
    return(
        <section id="Projects" className="px-3">
            <div className="">
            <h1 className="fw-bold">Projects</h1>
            <div>
                
                <ul className="list-unstyled ">
                    <li >
                        <WeLoveMoviesSection />
                    </li>

                    <li>
                        <GrubDashSection />                       
                    </li>
                        
                    <li className="py-5">      
                        <RestaurantSection />
                    </li>
                    <li className="py-5">      
                        <ThinkfulBnbSection />
                    </li>

                </ul>
            </div>
            <div>
                <img src=""/>
            </div>
        </div>
        </section>
        

    )
}
export default Projects