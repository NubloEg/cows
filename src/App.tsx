import React, { useState } from "react";
import main_cow from "./assets/main_cow.png";
import cow_1 from "./assets/cows/cow_1.png";
import cow_2 from "./assets/cows/cow_2.png";
import cow_3 from "./assets/cows/cow_3.png";
import cow_4 from "./assets/cows/cow_4.png";
import cow_5 from "./assets/cows/cow_5.png";
import "./App.css";

function App() {
  const [activeCow, setActiveCow] = useState<number>(0);
  const cows = [
    {
      img: cow_1,
      description:
        "Первая корова, которую я встретил, была большой и неуклюжей. Она своими огромными размерами напоминала слона, только в коровьем исполнении. Каждое ее движение сопровождалось громким хрусь, словно она раздавливала весь мир своими копытами. Ее шерсть была так смешно спутана, что казалось, будто она носит вечернее платье, которое все норовит сбиться с ходу.",
    },
    {
      img: cow_2,
      description:
        "Вторая корова не была такой громоздкой, но имела свою уникальную черту - непоколебимую уверенность в себе. Она шагала своим путь с высоко поднятой головой, словно королева пастбища. И что самое смешное, ее ухи были необыкновенно большие и казались такими тяжелыми, что она чуть не падала на них при каждом шаге. На вид она оставляла впечатление, будто несет непомерную тарелку с пирогами на своих головах.",
    },
    {
      img: cow_3,
      description:
        "Третья корова, она была настоящим комедиантом на пастбище. Постоянно пыталась забавить остальное скотное с помощью забавных поз и странных звуков. Каждый раз, когда она прыгала или показывала удивительные акробатические трюки, все остальные коровы не могли удержаться от смеха. Ее гибкие вывернутые ноги только добавляли комичности в ее выступления.",
    },
    {
      img: cow_4,
      description:
        "Четвертая корова, возможно, была самой ленивой из всех. Она всегда медленно передвигалась, будто ей были очень тяжелы все ее громоздкие части тела. Будь то хвост, уши или вымя, все это казалось излишне раздутым и порой даже спутанным, словно она забыла, как правильно носить свое тело. Но несмотря на ее лень, она была любимицей всех фотографов, ведь никто не мог устоять перед ее живым выражением на морде.",
    },
    {
      img: cow_5,
      description:
        "Пятая корова, ах, эта корова была шутником и провокатором. Она постоянно делала странные звуки, которые похожи на комичные шуточки. А ее глаза сверкали юмором и злорадством. Будь она человеком, она наверняка стала бы звездой комедийного шоу. Ее с ней никогда не было скучно, она всегда приносила радость и улыбки.",
    },
  ];

  const switchCow = (type: string) => {
    let nowCow = activeCow;
    if (type === "+") {
      if (nowCow === 5) {
        nowCow = 0;
      }
      setActiveCow(nowCow + 1);
    } else {
      if (nowCow === 1) {
        nowCow = 6;
      }
      setActiveCow(nowCow - 1);
    }
  };

  return (
    <div className="App">
      <div className="start_mod">
        <h1>Семёна коровы</h1>
        <img className="main_cow" width={"800px"} src={main_cow} alt="cow" />
      </div>
      <div className="menu">
        <div onClick={() => setActiveCow(1)} className="cow_item">
          Буренка
        </div>
        <div onClick={() => setActiveCow(2)} className="cow_item">
          Марта
        </div>
        <div onClick={() => setActiveCow(3)} className="cow_item">
          Рада
        </div>
        <div onClick={() => setActiveCow(4)} className="cow_item">
          Зорька
        </div>
        <div onClick={() => setActiveCow(5)} className="cow_item">
          Епифан
        </div>
      </div>
      <div className="overflow_cow">
        <div className="cow">
          <img onClick={() => setActiveCow(1)} src={cow_1} alt="cow_1" />
        </div>
        <div className="cow">
          <img onClick={() => setActiveCow(2)} src={cow_2} alt="cow_1" />
        </div>
        <div className="cow">
          <img onClick={() => setActiveCow(3)} src={cow_3} alt="cow_1" />
        </div>
        <div className="cow">
          <img onClick={() => setActiveCow(4)} src={cow_4} alt="cow_1" />
        </div>
        <div className="cow">
          <img onClick={() => setActiveCow(5)} src={cow_5} alt="cow_1" />
        </div>
      </div>
      <div className={`modal ${activeCow && "active"}`}>
        <div onClick={() => switchCow("-")} className="left icon">
          Назад
        </div>
        {activeCow && (
          <img
            onClick={() => setActiveCow(0)}
            src={cows[activeCow - 1].img}
            alt="cow_any"
          />
        )}
        {activeCow && (
          <div onClick={() => setActiveCow(0)} className="description">
            <div>{cows[activeCow - 1].description}</div>
          </div>
        )}
        <div onClick={() => switchCow("+")} className="right icon">
          Вперед
        </div>
      </div>
    </div>
  );
}

export default App;
