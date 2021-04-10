import React, {useState, useEffect} from 'react';
import './Total.css'

function Total(){

    let [total, setTotal] = useState(Number('0'));
    let [updateTotal, setUpdateTotal] = useState(false);

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

    return(
        <div id="totalText">
            ${formatNumber(total.toFixed(2))}
        </div>
    )
}

export default Total;