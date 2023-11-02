import { useState, useContext, useEffect } from "react";
import "./App.css";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
// import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom"
// import { User } from "./User"
// import { useState } from "react"
// import { Task } from "./Task"
// import { Text } from "./Text"
// import { Home } from "./pages/Home";
// import { Contact } from "./pages/Contact";
// import { Navbar } from "./Navbar";
// import { createContext } from "react";
// import { Profile } from "./pages/Profile";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
// export const AppContext = createContext()
// import { Form } from "./pages/Form"



// function App() {
//   return (
//     <div className="App">
//       <User name="Reso" age={27} email="reso@reso.com" />
//       <User name="Mehmet" age={28} email="mehmet@mehmet.com" />
//       <User name="Ahmet" age={29} email="ahmet@ahmet.com" />
//     </div>
//   );
// }


// const User = (props) => {
//   return <div>
//     <h2>{props.name}</h2>
//     <h2>{props.age}</h2>
//     <h2>{props.email}</h2>
//   </div>

// }

//! Example
// function App() {
//   const age = 15;
//   if (age >= 18) {
//     return <h2>OVER AGE</h2>
//   } else {
//     return (
//       <div className={styles.App}>
//         <Job salary={90000} position="Senior SDE" company="Amazon" />
//         <Job salary={12000} position="Junior SDE" compasny="Google" />
//         <Job salary={10000} position="Project Manager" company="Netflix" />
//       </div>
//     );
//   }
// }

// const Job = (props) => {
//   return <div>
//     <h2 className={styles.Name}>{props.salary}</h2>
//     <h2>{props.position}</h2>
//     <h2>{props.company}</h2>
//   </div>
// }

//! Example 2
// function App() {
//   const age = 19;
//   const isGreen = false;

//   return (
//     <div className={styles.App}>
//       {age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
//       <h1 style={{ color: isGreen ? "green" : "red", backgroundColor: "black" }}>THIS HAS COLOR</h1>
//       {isGreen && <button>THIS IS A BUTTON</button>}
//     </div>
//   );
// }
//! Example 3

// function App() {
//   const users = [
//     { name: "reso", age: 27 },
//     { name: "ahmet", age: 29 },
//     { name: "mehmet", age: 35 },
//   ];

//   return <div className="App"><h1>
//     {users.map((user, key) => {
//       // return <div>{user.name} {user.age}</div>

//       return <User name={user.name} age={user.age} />
//     })}

//   </h1></div>
// }
//! Exaple 4
// function App() {
//   const [age, setAge] = useState(0)
//   const increaseAge = () => {
//     setAge(age + 1)
//   }
//   return <div className="App">
//     {age}
//     <button onClick={increaseAge}>Increase Age</button>
//   </div>
// }
//! Exaple 5
// function App() {
//   const [inputValue, setInputValue] = useState("")

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value)
//   }
//   return <div className="App">
//     <input type="text" onChange={handleInputChange} /> <br />
//     {inputValue}
//   </div>
// }
//! Exaple 6
// function App() {
//   const [showText, setShowText] = useState(true)


//   return <div className="App">
//     <button onClick={() => setShowText(!showText)}>Show/Hide</button>
//     {showText && <h1>Hello My Name İs Reso</h1>}
//   </div>
// }
//! Exaple 7
// function App() {
//   const [textColor, setTextColor] = useState("black")


//   return <div className="App">
//     <button onClick={() => { setTextColor(textColor === "black" ? "red" : "black") }}>Show/Hide</button>
//     <h1 style={{ color: textColor }}>Hello My Name İs Reso</h1>
//   </div>
// }
//! Exaple 8
// function App() {
//   const [todoList, setTodoList] = useState([])
//   const [newTask, setNewTask] = useState("")


//   const handleChange = (event) => {
//     setNewTask(event.target.value)
//   }
//   const addTask = () => {
//     const task = {
//       id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
//       taskName: newTask,
//       completed: false,
//     }
//     setTodoList([...todoList, task])
//   }
//   const deleteTask = (id) => {
//     setTodoList(todoList.filter((task) => task.id !== id))
//   }
//   const completeTask = (id) => {
//     setTodoList(     todoList.map((task) => {
//         if (task.id === id) {
//           return { ...task, completed: true }
//         } else {
//           return task;
//         }
//       })
//     )
//   }

//   return (<div className="App">
//     <div className="addTask">
//       <input onChange={handleChange} />
//       <button onClick={addTask}>Add Task</button>
//     </div>
//     <div className="list">
//       {todoList.map((task) => {
//         return <Task taskName={task.taskName} id={task.id}
//           completed={task.completed}
//           deleteTask={deleteTask} completeTask={completeTask} />
//       })}
//     </div>
//   </div>
//   )
// }
//! Exaple 9
// function App() {
//   const [showText, setShowText] = useState(false)


//   return (<div className="App">
//     <button onClick={() => { setShowText(!showText) }}>
//       Show Text
//     </button>
//     {showText && <Text />}
//   </div>
// )
//}
// ! Exaple 10
// function App() {
//   const [username, setUsername] = useState("Reso")

//   return (<div className="App">
//     <AppContext.Provider value={{ username, setUsername }}>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
//         </Routes>
//       </Router>
//     </AppContext.Provider>
//   </div>
//   )
// }
//! Example 11
// const App = () => {
//   const [state, setState] = useState()


//   return (<div className="App">
//     <MiddleComponent state={state} />
//   </div>
//   )
// }

// const MiddleComponent = (state) => {
//   return (
//     <div>
//       <BottomComponent state={state} />
//     </div>
//   )
// }

// const BottomComponent = (state) => {
//   return <div>{state}</div>
// }


// ! Exaple 12
// function App() {
//   const client = new QueryClient({
//     defaultOptions: {
//       queries: {
//         refetchOnWindowFocus: false,

//       },
//     },
//   })

//   return (
//     <div className="App">
//       <QueryClientProvider client={client}>
//         <Router>
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
//           </Routes>
//         </Router>
//       </QueryClientProvider>
//     </div>
//   )
// }
//! Exaple 13
function App() {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div className="App">
            <button onClick={() => setIsVisible((prev) => !prev)} >

                {isVisible ? "Hide" : "Show"}
            </button>
            {isVisible && <h1>Hidden text</h1>}
        </div>
    )
}
export default App;
