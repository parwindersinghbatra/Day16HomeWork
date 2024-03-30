import { useReducer, useRef, useState } from "react";
import Employee from "./component/Employees";
import Team from "./component/Team";
import "./App.css";
const reducer = (prevState, action) => {
  switch (action.type) {
    case "add_new_member":
      return {
        employees: [...prevState.employees, action.payload],
        team: prevState.team,
      };
    case "add_member_to_team":
      return {
        employees: prevState.employees,
        team: [...prevState.team, prevState.employees[action.payload - 1]],
      };
    case "remove_member_from_team":
      return {
        employees: prevState.employees,
        team: prevState.team.filter((member) => member.id !== action.payload),
      };

    default:
      return prevState;
  }
};

const initialState = {
  employees: [
    { id: 1, name: "Raj", age: 23 },
    { id: 2, name: "Surinder", age: 22 },
    { id: 3, name: "Nerti", age: 43 },
    { id: 4, name: "Elton", age: 31 },
    { id: 5, name: "Garvy", age: 32 },
    { id: 6, name: "Fin", age: 26 },
    { id: 7, name: "Minnaminnie", age: 52 },
    { id: 8, name: "Fernando", age: 40 },
  ],
  team: [],
};
function App() {
  const [data, dispatch] = useReducer(reducer, initialState);

  const nameInputRef = useRef(null);
  const ageInputRef = useState(null);
  return (
    <div className="main_container">
      <div
        style={{ display: "flex", flexDirection: "row", margin: "0px auto" }}
      >
        <Employee dispatch={dispatch} data={data} />
        <Team dispatch={dispatch} data={data} />
      </div>

      <div>
        <input ref={nameInputRef} type="text" placeholder="Enter Name" />
        <input ref={ageInputRef} type="number" placeholder="Enter Age" />

        <button
          onClick={() => {
            const name = nameInputRef.current.value;
            const age = ageInputRef.current.value;
            const newEmployee = {
              name: name,
              age: age,
            };
            dispatch({ type: "add_new_member", payload: newEmployee });
          }}
        >
          Add New Value
        </button>
      </div>
    </div>
  );
}

export default App;
