import styles from "./App.module.css";

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
function App() {
  const age = 19;
  const isGreen = true;

  return (
    <div className={styles.App}>
      {age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
      <h1 style={{ color: isGreen ? "green" : "red", backgroundColor: "black" }}>THIS HAS COLOR</h1>
    </div>
  );
}


export default App;
