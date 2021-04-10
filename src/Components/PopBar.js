import './PopBar.css';
import {useEffect, useState} from 'react'
import axios from 'axios'

function PopBar() {
    let scrollCoins;
    let [popBar, setPopBar] = useState([]);

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cdogecoin%2Cethereum%2Clitecoin%2Cripple%2Ctether&vs_currencies=usd&include_24hr_change=true')
            .then(res => {
                scrollCoins = (Object.entries(res.data)).sort();

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

                setPopBar(<div id="scrollBar">
        <div className="scrollElement" id="bitcoin">
            <img style={{height: 100, float: 'left', marginLeft: -25, marginTop: 40}} alt="btc img" src="https://logos-world.net/wp-content/uploads/2020/08/Bitcoin-Emblem.png"></img>
            <p>{capitalize(scrollCoins[0][0])}</p>
            <p>${formatNumber(scrollCoins[0][1].usd)} <span className={scrollCoins[0][1].usd_24h_change < 0 ? "loss" : "gain"}>({(scrollCoins[0][1].usd_24h_change.toFixed(2))}%)</span></p>
        </div>

        <div className="scrollElement" id="dogecoin">
            <img style={{height: 110, float: 'left', marginTop: 35}} alt="doge img" src="https://cdn.freebiesupply.com/logos/large/2x/dogecoin-logo-png-transparent.png"></img>
            <p>{capitalize(scrollCoins[1][0])}</p>
            <p>${scrollCoins[1][1].usd} <span className={scrollCoins[1][1].usd_24h_change < 0 ? "loss" : "gain"}>({(scrollCoins[1][1].usd_24h_change.toFixed(2))}%)</span></p>
        </div>

        <div className="scrollElement" id="ethereum">
            <img style={{height: 110, float: 'left', marginTop: 35}} alt="doge img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png"></img>
            <p>{capitalize(scrollCoins[2][0])}</p>
            <p>${formatNumber(scrollCoins[2][1].usd)} <span className={scrollCoins[2][1].usd_24h_change < 0 ? "loss" : "gain"}>({(scrollCoins[2][1].usd_24h_change.toFixed(2))}%)</span></p>
        </div>

        <div className="scrollElement" id="litecoin">
            <img style={{height: 90, float: 'left', marginLeft: 15, marginTop: 45}} alt="btc img" src="https://cryptologos.cc/logos/litecoin-ltc-logo.png"></img>
            <p>{capitalize(scrollCoins[3][0])}</p>
            <p>${scrollCoins[3][1].usd} <span className={scrollCoins[3][1].usd_24h_change < 0 ? "loss" : "gain"}>({(scrollCoins[3][1].usd_24h_change.toFixed(2))}%)</span></p>
        </div>

        <div className="scrollElement" id="ripple">
            <img style={{height: 85, float: 'left', marginLeft: 15, marginTop: 50}} alt="doge img" src="https://seeklogo.com/images/R/ripple-xrp-logo-E97D62205B-seeklogo.com.png"></img>
            <p>{capitalize(scrollCoins[4][0])}</p>
            <p>${scrollCoins[4][1].usd} <span className={scrollCoins[3][1].usd_24h_change < 0 ? "loss" : "gain"}>({(scrollCoins[4][1].usd_24h_change.toFixed(2))}%)</span></p>
        </div>

        <div className="scrollElement" id="tether">
            <img style={{height: 87, float: 'left', marginLeft: 15, marginTop: 50}} alt="doge img" src="https://cryptologos.cc/logos/tether-usdt-logo.png"></img>
            <p>{capitalize(scrollCoins[5][0])}</p>
            <p>${scrollCoins[5][1].usd} <span className={scrollCoins[5][1].usd_24h_change < 0 ? "loss" : "gain"}>({(scrollCoins[5][1].usd_24h_change.toFixed(2))}%)</span></p>
        </div>

    </div>);
            });
    },[]);
    
    return (
    <div>
        {popBar}
    </div>
    );
}

export default PopBar;
