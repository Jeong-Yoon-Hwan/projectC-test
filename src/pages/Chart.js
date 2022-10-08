import axios from "axios";
import React,{useEffect, useState} from "react";
import styled from "styled-components";

const Chart = () => {
    const refreshPage = () =>{
      window.location.reload();
    }

    const [loading,setLoading] = useState(true);

    const [coins,setCoins] = useState([]);

    useEffect(()=>{
      axios.get("http://api.coinpaprika.com/v1/tickers?quotes=KRW")
      .then((response)=>{
        console.log(response.data.slice(0,100))
        setCoins(response.data.slice(0,100))
        setLoading(false);
      }).catch((error)=>{
        console.log(error);
      })
    },[])

    return(
      <Container>
        <header>
          <h1>실시간 가상화폐 순위</h1>
          <button onClick={ refreshPage }>새로고침</button>
        </header>
        <section>
          {
            loading ? <span>Loading...</span> :
            (
             <table>
              <thead>
                <tr>
                  <th>순위</th>
                  <th>종목</th>
                  <th>기호</th>
                  <th>가격(KRW)</th>
                  <th>총 시가</th>
                  <th>거래량(24H)</th>
                  <th>변동(24H)</th>
                  <th>변동(7D)</th>
                </tr>
              </thead>
              <tbody>
                {
                 coins.map((coin,idx)=>(
                  <tr key={idx}>
                    <td>{ coin.rank }</td>
                      <td>{ coin.name }</td>
                      <td>{ coin.symbol }</td>
                      <td>{ Number(coin.quotes.KRW.price.toFixed(1)).toLocaleString() }</td>
                      <td>{ (coin.quotes.KRW.market_cap / 1000000000000).toFixed(2) }T</td>
                      <td>{ (coin.quotes.KRW.volume_24h / 1000000000000).toFixed(2) }T</td>
                      <td>{ coin.quotes.KRW.percent_change_24h.toFixed(2) }%</td>
                      <td>{ coin.quotes.KRW.percent_change_7d.toFixed(2) }%</td>
                  </tr>
                 )) 
                }
              </tbody>
             </table>
            )
          }
        </section>
      </Container>
    )
  }

export default Chart;


const Container = styled.div`
  width:100%;
  height:100%;
  background-color: beige;
  overflow-y:scroll;
  -ms-overflow-style:none;
  
  & > header {
    display: flex;
  }
`