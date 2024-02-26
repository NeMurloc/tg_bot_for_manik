import React from "react";
import { HeadlineBody } from "../textStyles/TextStyleComponents";
import ServicesHeader from "../components/header/ServicesHeader";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


const Info = () => {
    let tg = window.Telegram.WebApp;
    const navigate = useNavigate();


    useEffect(()=> {
        tg.BackButton.show();
        tg.BackButton.onClick(() => navigate("*"));
    }, [])
    
    const {id} = useParams();

    return (
        <div>
            <ServicesHeader>Описание из json</ServicesHeader>

            <HeadlineBody>Длитаельность из json ID: {id} </HeadlineBody>

            <HeadlineBody>Описание из json</HeadlineBody>


            
            <button onClick={() => navigate("*")}>Андрей гей</button>
        </div>
    )
}

export default Info;