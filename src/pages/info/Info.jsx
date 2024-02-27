import React from "react";
import { HeadlineBody } from "../../textStyles/TextStyleComponents";
import ServicesHeader from "../../components/header/ServicesHeader";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../Services.json"
import cl from "./Info.module.css"



import photo1 from "../../photo/def.jpeg"
import photo2 from "../../photo/gor.jpeg"
import photo3 from "../../photo/sgor.jpeg"
import photo4 from "../../photo/square.jpeg"
import photo5 from "../../photo/svert.jpeg"
import photo6 from "../../photo/ver.jpeg"

const images = [photo1, photo2, photo3, photo4, photo5, photo6];


const Info = () => {



  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };






  let tg = window.Telegram.WebApp;
  const navigate = useNavigate();
  const { id } = useParams();

  const [itemId, setItemId] = useState('');
  const [itemInfo, setItemInfo] = useState({
    name: '',
    img: '',
    time: '',
    info: ''
  });


  useEffect(() => {
    tg.BackButton.show();
    tg.BackButton.onClick(() => navigate("*"));
  }, [])

  useEffect(() => {
    const getItemById = () => {
      let selectedItem = { name: '', img: '', time: '', description: '' };
      data.forEach(category => {
        const foundItem = category.items.find(item => item.id === id);
        if (foundItem) {
          selectedItem = {
            name: foundItem.name,
            img: foundItem.img,
            time: foundItem.time,
            description: foundItem.description
          };
        }
      });
      return selectedItem;
    };

    setItemInfo(getItemById());
  }, [id]);




  return (
    <div>
      <ServicesHeader>{itemInfo.name}</ServicesHeader>


      <img src={images[currentIndex]} alt="Следующее изображение" />

      <HeadlineBody className={cl.time}>Длительность: {itemInfo.time} </HeadlineBody>

      <HeadlineBody>{itemInfo.description}</HeadlineBody>

      <button onClick={showNextImage}>Следующее изображение</button>


      {/* <button onClick={() => navigate("*")}>Андрей гей</button> */}
    </div>
  )
}

export default Info;