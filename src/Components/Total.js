import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './Total.css'
import './currencyData.json'

function Total(){

    let [total, setTotal] = useState(Number('0'));
    let [updateTotal, setUpdateTotal] = useState(false);
    let currencies;

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

    function currencyConvert(){
        for(let i = 0; i < currencies.length; i++){

        }
    }

    return(
        <div>
            <span id="preTotalText">Total: </span><span id="totalText">${formatNumber(total.toFixed(2))}</span>
            <p><span id="cPreTotalText">Converted Total: </span><span id="totalText">${formatNumber(total.toFixed(2))}</span></p>
        </div>
    )
}

export default Total;