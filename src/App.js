import "./App.css";

import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Main from "./pages/Main";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Layout from "./common/Layout";

import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";


function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([
    { id: nanoid(), content: "리액트공부하기", like: 0 },
    { id: nanoid(), content: "아침 운동하기", like: 0 },
    { id: nanoid(), content: "졸지 않기", like: 0 },
    { id: nanoid(), content: "리액트 과제하기", like: 0 },
  ]);
  // likUp 이라는 애를 id로 받고 setTodos를 이전배열로 받은 뒤, 그 이전배열 하나하나를 맵을 통해 일로 받음. 그리고 그 받은 일의 id와 likeUp에서 받은 id가 일치하면 todos에 있던 내용과 좋아요+1을 보여줌. 근데 리액트는 깊은 복사를 해야 변경을 인식하니까 {...일}로 넣어야함. return { ...일, like: 일.like + 1 } 은 기존의 일을 스프레드 문법으로 넣은 뒤, 객체구조할당?(맞는진 모르겠으나 내 생각)으로 like의 값만 위에 덮어쓰기해서 like가 올라간 새로운배열인 const=좋아요올라감을 반환한다.
  const likeUp = (id) => {
    setTodos((이전배열) => {
      const 좋아요올라감 = 이전배열.map((일) => {
        if (일.id === id) {
          return { ...일, like: 일.like + 1 };
        }
        return 일;
      });
      return 좋아요올라감;
    });
  };

  return (

    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route
            path="*"
            element={
              <>
                <div>없는 페이지입니다</div>
                <Link to="/">홈으로 이동</Link>
              </>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
=======
//     <>
//       <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
//       <button
//         onClick={() => {
//           //todos는 배열인데 newTodo는 문자열이니까 newTodo를 객체로 변환하는 const newTodoItem= { id: nanoid(), content: newTodo };setTodos([...todos, newTodoItem]) 이 과정이 필요함
//           const newTodoItem = { id: nanoid(), content: newTodo, like: 0 };
//           setTodos([...todos, newTodoItem]);
//           setNewTodo("");
//         }}
//       >
//         입력하기
//       </button>

//       {todos.map((할일) => (
//         <div key={할일.id}>
//           <div>
//             <div>{할일.content}</div>
//             <button
//               onClick={() => {
//                 const 삭제후새로운배열 = todos.filter((todo) => {
//                   return todo.id !== 할일.id;
//                 });
//                 setTodos(삭제후새로운배열);
//               }}
//             >
//               삭제하기
//             </button>
//           </div>
//           <span
//             onClick={() => {
//               //likeUp의 할일.id가 들어가면 위에 있던 게 (일.id === 할일.id) 로 비교가 되는 것 맞나용?
//               likeUp(할일.id);
//             }}
//           >
//             👍{할일.like}
//           </span>
//         </div>
//       ))}
//     </>

  );
}

// function Button(props) {
//   console.log(props);
//   return (
//     <button
//       onClick={() => {
//         props.클릭함수(props.name);
//       }}
//     >
//       {props.name}
//     </button>
//   );
// }
// function CityInfo(props) {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <p>{props.desc}</p>
//     </div>
//   );
// }

// function App() {
//   const cities = [
//     {
//       name: "서울",
//       desc: "서울은 인구 너무 많음",
//     },
//     {
//       name: "부산",
//       desc: "부산은 해운대",
//     },
//     {
//       name: "대구",
//       desc: "대구 너무 더워",
//     },
//   ];
//   const [selectedCity, setSelectedCity] = useState("서울");
//   return (
//     <>
//       <Button name="서울" 클릭함수={setSelectedCity} />
//       <Button name="부산" 클릭함수={setSelectedCity} />
//       <Button name="대구" 클릭함수={setSelectedCity} />

//       {cities[0].name === selectedCity && (
//         <CityInfo name={cities[0].name} desc={cities[0].desc} />
//       )}
//       {cities[1].name === selectedCity && (
//         <CityInfo name={cities[1].name} desc={cities[1].desc} />
//       )}
//       {cities[2].name === selectedCity && (
//         <CityInfo name={cities[2].name} desc={cities[2].desc} />
//       )}

//     </>
//   );
// }
export default App;
