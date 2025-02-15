import "./App.css";
import OrderEditor from "./assets/components/OrderEditor";
// import CurrentInput from "./assets/components/CurrentInput";
import { useState } from "react";

// function Welcome({ userName, isMember }) {
//   return (
//     <h1>
//       {isMember
//         ? `${userName}님 다시 오셨군요`
//         : `${userName}님 가입하시겠어요?`}
//     </h1>
//   );
// }
function CurrentInput({ currency, value, onChange }) {
  return (
    <div>
      <label>{currency}:</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(currency, e.target.value)}
      />
    </div>
  );
}
const exchangeRate = 1400;

function App() {
  const [state, setState] = useState({
    krw: 0,
    usd: 0,
  });

  const onChange = (currency, value) => {
    console.log({ currency, value });
    if (currency === "krw") {
      setState({
        krw: value,
        usd: value / exchangeRate,
      });
    } else {
      setState({
        krw: value * exchangeRate,
        usd: value,
      });
    }
  };

  return (
    <>
      {/* {<Welcome userName={"오리너리"} isMember={true} />} */}
      {/* <OrderEditor /> */}

      <section>
        <h1>환율 변환기 &#40;KRW - USD&#41;</h1>
        <CurrentInput currency={"krw"} value={state.krw} onChange={onChange} />
        <CurrentInput currency={"usd"} value={state.usd} onChange={onChange} />
      </section>
    </>
  );
}

export default App;

import "./App.css";
