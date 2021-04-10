import {useState} from 'react';

function ElementMap(price){

    let [amount, setAmount] = useState(Number(''));

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

    const inputChange = event => {
        setAmount(event.target.value);
    }
    
    
    return(
        <div>
            <div id="amountInput">
                    <form>
                        <input id="amountInputField" type="number" placeholder="Amount of Crypto Owned" defaultValue='0' min='0' onChange={inputChange}></input>
                    </form>
            </div>
            <div id="eq">
                <span>=</span>
            </div>
            <div id="subTot">
                <span id="subTotal">$<span className="subValue">{formatNumber((price.price * amount).toFixed(2))}</span></span>
            </div>
        </div>
    )
}

export default ElementMap;