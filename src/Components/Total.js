import React, {useState, useEffect} from 'react';
import './Total.css'
import currencies from './currencyData.json'

function Total(){

    let [total, setTotal] = useState(Number('0'));
    let [updateTotal, setUpdateTotal] = useState(false);
    const [value, setValue] = useState("Euro");
    let rates = currencies;
    let [selRate, setSelRate] = useState(Number('1'));
    let [selSym, setSelSym] = useState("$");
    let convTotal = total * selRate;

    const totalfy = (num) => {
        return parseFloat(num.replace(/[, ]+/g, ""));
    }

    useEffect(() => {       
        let zero = Number('0');
        for (let i = 0; i < (document.querySelectorAll('span.subValue')).length; i++){         
            setTotal(zero += totalfy(document.querySelectorAll('span.subValue')[i].innerText));
        }
        setUpdateTotal(!updateTotal);
    }, [updateTotal]);

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

    const newTotalConv = (e) => {
        e.preventDefault();
        if (value) {
            for (let i = 0; i < rates.length; i++) {
                if (value === rates[i].name){
                    setSelSym(rates[i].symbol);
                    setSelRate(rates[i].value);
                }
            }
        }
    };

    const handleValue = ({ target }) => {
        setValue(target.value);
    };

    return(
        <div>
            <span id="preTotalText">Total: </span><span id="totalText">${formatNumber(total.toFixed(2))}</span>
            <p><span id="cPreTotalText">Converted Total: </span><span id="totalText">{selSym}{formatNumber(convTotal.toFixed(2))}</span></p>
            <form onSubmit={newTotalConv}>
                <select onChange={handleValue}>
                    {rates.map((c) => (
                        <option value={c.name}>
                            {c.name}
                        </option>
                    ))}
                </select>
                <input type="submit" value="Convert"></input>
            </form>
        </div>
    )
}

export default Total;
