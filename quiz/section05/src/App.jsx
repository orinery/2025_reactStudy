import "./App.css";
import OrderEditor from "./assets/components/OrderEditor";

// function Welcome({ userName, isMember }) {
//   return (
//     <h1>
//       {isMember
//         ? `${userName}님 다시 오셨군요`
//         : `${userName}님 가입하시겠어요?`}
//     </h1>
//   );
// }

function App() {
  return (
    <>
      {/* {<Welcome userName={"오리너리"} isMember={true} />} */}
      <OrderEditor />
    </>
  );
}

export default App;

import "./App.css";
