import './MainApp.css'
import { useEffect, useState } from "react";
import axios from "axios";

function MainApp() {
    let [coins, setCoins] = useState([]);
    let [disCoins, setDisCoins] = useState([]);
    const [value, setValue] = useState("bitcoin");
    let amount;

    useEffect(() => {
        axios
        .get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        )
        .then((res) => {
            setCoins(res.data.slice(0, 17));
        });
    }, []);

    const newCalcData = (e) => {
        e.preventDefault();
        if (value) {
            for (let i = 0; i < coins.length; i++) {
                if (value === coins[i].id){
                    let num = i;
                    setDisCoins([...disCoins, coins[num]]);
                }
            }
        }
    };

    const handleValue = ({ target }) => {
        setValue(target.value);
    };

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    function formatNumber(num) {
        let result;
        if (num > 100){
            result = num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        }
        else {
            result = num;
        }

        return result;
    }

    return (
        <div id="calcApp">
            {disCoins.map((c) => (
                <div id="calcElement">
                <img id="coinImg" src={c.image} alt="Coin img"></img>
                <div id="calcInfo">
                    <div id="calcName">{c.name}<span id="calcSymbol">  ({capitalize(c.symbol)})</span></div>
                    <div id="calcPrice">
                        ${formatNumber(c.current_price)}
                        <span id="calcChange" className={c.price_change_percentage_24h < 0 ? "loss" : "gain"}>  ({c.price_change_percentage_24h}%)</span>
                    </div>
                </div>
                <div id="x">
                    <span>×</span>
                </div>
                <div id="amountInput">
                    <input id="amountInput" type="number" placeholder="Amount of Crypto Owned"></input>
                </div>
                {/* <div id="eq">
                    <span>=</span>
                </div> */}
                <div id="subTot">
                    <span id="subTotal"></span>
                </div>
                {console.log(Number(c.current_price))}
                {console.log(document.getElementById('amountInput'))}
                </div>
            ))}

            <form onSubmit={newCalcData}>
                <select onChange={handleValue}>
                    {coins.map((c) => (
                        <option value={c.id}>
                            {c.name}
                        </option>
                    ))}
                </select>
                <input type="submit" value="Add Coin"></input>
            </form>
        </div>
    );
}

export default MainApp;
