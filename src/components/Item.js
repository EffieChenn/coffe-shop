import React from "react";
import '../css/Item.css';
import coffee from '../img/coffee.jpg';
import coffee_bg from '../img/coffee_bg.jpg';
import coffeeBean from '../img/coffeeBean.jpg';

const Item = () => {

    const items = [
        { id: 1, img: coffee, price: 'NT.100', name: 'Expresso', desc:'香醇濃郁的義式縮咖啡'},
        { id: 2, img: coffee_bg, price: 'NT.100', name: 'Americano', desc:'經典的美式咖啡' },
        { id: 3, img: coffeeBean, price: 'NT.130', name: 'Latte', desc:'新鮮牛奶加上濃郁的濃縮咖啡'},
        { id: 4, img: coffee, price: 'NT.150', name: 'Motcha Latte', desc:'來自日本進口的抹茶加入經典拿鐵中'},
        { id: 5, img: coffee_bg, price: 'NT.120', name: 'Caramel Latte', desc:'來自法國進口的焦糖加入經典拿鐵中'},
        { id: 6, img: coffeeBean, price: 'NT.120', name: 'Cocoa Milk', desc:'法國法芙娜可可加上香醇的鮮奶'},
    ];


    return (
        <div className="displayItem">
            <ul>
                {
                    items.map(item => (
                        <li key={item.id} className="item">
                            <div className="pic">
                                <img src={item.img} alt="coffe_img" />
                            </div>
                            <div className="details">
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                                <p>{item.desc}</p>
                            </div>
                            {/* style={{ width: 300}} */}
                        </li>
                    ))
                }
            </ul>

        </div>
    );
};

export default Item;