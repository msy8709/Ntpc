import "./Counter.css";
import React, { useState } from "react";
function Counter({isCounter}) {
    //  let counter 를 지우고, useState를 사용해서 버튼 텍스트에 사용할 counter 변수를 정의하세요
  const [Counter, setCounter] = useState(0);
  const increaseCounter = () => {
    setCounter(Counter+1)
  }
  const decreaseCounter = () => {
    setCounter(Counter-1);
  }

  return (
    //삼항 연산자를 이용해서 isCounter에따라 컨디셔널 랜딩을 수행하세요
        <div className ="counter_counter">
          <img
            className ="counter_leftbuttonIcon"
            alt=""
            src="images/Arrow.png"
            onClick={decreaseCounter}
            //onClick Event 핸들러를 이용해서 카운터를 증가시키는 버튼 기능을 넣으세요
          />
          <div className ="counter_counterframe">
            <div className ="counter_shadow">
              <div className ="counter_shadowChild" />
              <div className ="counter_shadowItem" />
            </div>
            <div className ="counter_numberframe">
              <div className ="counter_number">{Counter}</div>
            </div>
          </div>
          <img
            className ="counter_rightbuttonIcon"
            alt=""
            src="images/Arrow.png"
            onClick={increaseCounter}
            //onClick Event 핸들러를 이용해서 카운터를 감소시키는 버튼 기능을 넣으세요
          />
        </div>
  );
}

export default Counter;
