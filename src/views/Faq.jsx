import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Question from "../components/Question"

export default function FAQ() {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Question title="How much money do I need to invest?" text="How much money you are looking to invest depends on your preferences and financial situation. However, we do recommend to invest at least EUR 10k per investor."/>
            <Question title="How can I get the money I invested back?" text="Minimum investment periods will be stipulated in the co-ownership agreement you will sign with your co-owners based on everyone’s preferences. However, we recommend to include a minimum period of 5 years."/>
            <Question title="What happens if I sell my co-ownership shares after the minimum holding period?" text="In the event that one of multiple co-owners decide to sell their shares, the remaining owner(s) have the right to buy the shares. If they do not wish to buy the shares any other investor is able to purchase the shares. "/>
            <Question title="What are my rights as a property co-owner?" text=""/>
            <Question title="What are my obligations as a property co-owner?" text=""/>
            <Question title="Can I occupy the property?" text=""/>
            <Question title="Can we get a mortgage to purchase the property?" text=""/>
            <Question title="What happens in case of default of one or multiple co-owners?" text=""/>
            <Footer></Footer>
        </div>
    )
}