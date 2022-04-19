import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import '../css/Main.css';

const About = () => {
    return (
        <>
            <Header />
            <Navigation />
            <div className="main">
                <h1>ABOUT US</h1>
                <div className="about">
                    <span>
                        <p>
                            因一句“懂得喝義式咖啡才是行家”創辦人黃銘賢初嚐Espresso，
                        </p>
                        <p>
                            強烈風味震撼了味蕾，定下做杯好咖啡的決心。堅持手工烘豆、
                        </p>
                        <p>
                            細細翻動、控制火侯，尋找甜蜜點讓咖啡豆完美釋放風味，
                        </p>
                        <p>
                            歷經四年研發出經典配方，以義大利女神Louisa為名，
                        </p>
                        <p>
                            守護讓所有咖啡愛好者喝杯好咖啡的信念，堅定對精品咖啡文化的熱情，
                        </p>
                        <p>
                            並於2006年創立第一間門市，開啟路易莎精品咖啡連鎖品牌的世界藍圖。
                        </p>
                    </span>

                </div>

            </div>
        </>
    );
};

export default About;