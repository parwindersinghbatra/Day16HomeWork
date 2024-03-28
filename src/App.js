import { useReducer } from 'react';
import './App.css';
import Employees from './component/Employees';
import Team from './component/Team';


const reducer = (prevState, action) => {
  switch(action.type){
    case 'add_member_to_team':
    return{
        emplyees:prevState.emplyees,
        team:[...prevState.team, prevState.emplyees[action.payload-1]]

    }

    default:
      return prevState
  }
}

const initialState = {
  emplyees:[
    {
      id:1,
      name:"Jody",
      age:40
    },
    {
      id:2,
      name:"Cece",
      age:20
    },
    {
      id:3,
      name:"Elton",
      age:35
    },
  ],
  team:[]
}
function App() {

  const [data, dispatch] = useReducer(reducer, initialState)
  
  return (
    <div className="App">
     <Employees data={data} dispatch={dispatch}/>
     <Team data={data} />

    </div>
  );
}

export default App;
