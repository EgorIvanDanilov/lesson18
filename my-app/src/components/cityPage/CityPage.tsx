// import { FC } from 'react'

// импорт специального типа Functional Component или FC

import { FC, useState } from "react";

// этот компонент - стрелочная функция, которая возвращает теги верстки
// эти теги похожи на HTML, но это xml другой распространенный язык разметки
// но особой разницы вы не заметите, представьте что это HTML внутри типизированного JS

const CityPage: FC = () => {
  //не забудьте что теги в TSX нужно помещать в родителя - иначе будет ошибка
  //есть даже специальный пустой тег для этих целей
  const [isBerlin, setIsBerlin] = useState(true);
  function toggleCity(): void {
    setIsBerlin((isBerlin) => {
      return !isBerlin;
    });
  }
  const cityData = isBerlin
    ? {
        name: "Berlin",
        title: "Capital of Germany",
        imgUrl:
          "https://content.r9cdn.net/rimg/dimg/94/77/3c308be3-lm-1035-172eedc4c70.jpg?width=1366&height=768&xhint=2600&yhint=3239&crop=true",
      }
    : {
        name: "Paris",
        title: "Capital of France",
        imgUrl:
          "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSckA14XPGRXCYIXqRkntwgeXbuObjG2demYu2QQNF65loUquGfpZd0RDSzV95FPkfahwDSBsa3ofHJXhiw4yTzPYcKrFjq",
      };
  return (
    <div className="App">
      <h1>{cityData?.name}</h1>
      <p>{cityData?.title}</p>
      <div className="imgWrapper">
        <img src={cityData?.imgUrl} alt="" />
      </div>
      <button onClick={toggleCity}>
        {isBerlin ? "Switch to paris" : "Back to Berlin"}
      </button>
    </div>
  );
};

export default CityPage;
