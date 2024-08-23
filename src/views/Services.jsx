import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Service from "../components/Service";
import TextLeft from "../components/TextLeft";
import arco_triunfo_image from '../images/arco_triunfo.png';
import TextRight from "../components/TextRight";

export default function Services() {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <TextLeft 
                title="Group Investment Facilitation" 
                text="Assist groups of friends in coming together to invest in a property in Portugal and
                provide tools and resources to help them decide on the best property based on their goals (e.g., living vs. renting)."
                src={arco_triunfo_image}
            /> 
            <Service title="Legal Services" text="Draft comprehensive legal agreements tailored to group property ownership and
                clarify and stipulate the following items in the contract:"
                list_items={[
                    {id: "1", li: "Ownership Shares: Define each member's ownership percentage based on their financial contribution."},
                    {id: "2", li: "Usage Rights: Specify how the property will be used (e.g., primary residence, vacation home, rental)."},                    
                    {id: "3", li: "Decision-Making Process: Outline how decisions related to the property (e.g., selling, renting, repairs) will be made."},                    
                    {id: "4", li: "Exit Strategy: Establish rules for when a member wants to sell their share, including buy-out options and procedures."},                    
                    {id: "5", li: "Conflict Resolution: Provide a framework for resolving disputes among owners."},
                    {id: "6", li: "Maintenance and Costs: Allocate responsibilities for property maintenance and ongoing costs (e.g., utilities, taxes)."},
                    {id: "7", li: "Insurance Requirements: Ensure the property is adequately insured, detailing the cost-sharing arrangement."}
                ]}/>
            <TextRight 
                title="Mortgage Assistance"
                text="Help groups secure financing by navigating the mortgage process in Portugal, work with banks to offer competitive mortgage 
                rates tailored to group ownership structures and provide financial counseling to ensure the group can comfortably manage the mortgage payments."
                src={arco_triunfo_image}/>
            <Footer></Footer>
        </div>
    )
}