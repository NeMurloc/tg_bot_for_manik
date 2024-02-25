import React from "react";
import { HeadlineBody } from "../textStyles/TextStyleComponents";
import ServicesHeader from "../components/header/ServicesHeader";
import { useEffect } from "react";


const Info = () => {
    let tg = window.Telegram.WebApp;

    useEffect(()=> {
        tg.BackButton.show();
    }, [])
    
    return (
        <div>
            <ServicesHeader>Описание из json</ServicesHeader>

            <HeadlineBody>Длитаельность из json</HeadlineBody>

            <HeadlineBody>Описание из json</HeadlineBody>
        </div>
    )
}

export default Info;