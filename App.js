// functional component
// function App(){
//   function Click(){
//   alert('Button call');
//   }
//   return(
//     <>
//     <h1>Button Event example</h1>
//     <button onClick={Click}>Click me</button>
//     </>
//   );
// }
// export default App;




//class component
// import React from 'react';
// class App extends React.Component{
//   click(){
//     alert('Button is called');
//   }
//   render(){
//     return(
//       <>
//       <h1>Button Events</h1>
//       <button onClick={this.click.bind(this)}>Click me</button>
//       </>
//     );
//   }
// }
// export default App;



// Button list event details
// function App(){
//   function Print(event){
//     console.log(event);
//     console.warn('Type:',event.type);
//     console.warn('Name:',event.target.name);
//     console.warn('Value:',event.target.value);
//   }
//   return(
//     <>
//     <h1>Button list event</h1>
//     <button onClick={Print} name='Chaki' value='I am button'>Click</button>
//     </>
//   )
// }
// export default App;



// form onsubmit 
// import React from 'react';
// class App extends React.Component{
//   print(event){
//     console.log(event);
//     console.warn('Type',event.type);
//     event.preventDefault();
//   }
//   render(){
//     return(
//       <>
//       <h1>Form Submission</h1>
//       <form onSubmit={this.print.bind(this)}>
//       Name: <input type='text' name='txt'/>
//         <input type='submit'/>
//         </form>
//       </>
//     );
//   }
// }

// export default App;



// textbox onchange print
import React from 'react';
class App extends React.Component{
  print(event){
    // console.log(event);
    console.warn(event.type);
    console.warn(event.target.name);
    console.warn(event.target.value);
    // event.preventDefualt();
  }
  render(){
    return(
      <>
      <h1>Example of onchange method</h1>
      Name: <input type='text' name='txt' onChange={this.print.bind(this)}/>
      Number:<input type='number' name='num' onChange={this.print.bind(this)}/>

      </>
    );
  }
}
export default App;