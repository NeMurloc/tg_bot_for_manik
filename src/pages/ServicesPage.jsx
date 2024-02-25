import React from "react";
import ServicesHeader from "../components/header/ServicesHeader";
import ServicesBlocks from "../components/services/blocks/ServicesBlocks";

const Services = () => {
    
    return (
        <div>
            <ServicesHeader>Выберите услугу</ServicesHeader>
            <ServicesBlocks/>
        </div>
    )
}

export default Services;