//Increment app lect30 Hooks
import React, { useState } from "react";
const App =()=>
{
let state = useState();

const[count,setCount]=useState(5);

const IncNum = () => {
    setCount(count+1);  //onclicking
   // setCount(100);
    //console.log("clicked " + count);
   // setCount(count + 1);
};

    return (
        <>
            <h1>{count}</h1>
            <button onClick={IncNum}>Click Me</button>
        </>
    );
};
export default App;



//Current time challenge lect31      not run,not done css

//import React,{ useState }  from "react";
//const App = ()=>{
  //  let newTime=new.Date().toLocaleTimeString();
  //  const[ctime,setCtime]=useState(newTime);

  //  const UpdateTime =()=>{
    //    newTime = new Date().toLocaleDateString();
     //   setCtime(newTime);
   // };
    

    //return (
    //<>
     //   <h1>{cTime}</h1>
     //   <button onClick={UpdateTime}>get time</button>
   // </>
   //);
   //};
   //export default App;







     //lect32 digital clock challenge  Not run ,not done css


      
//import React,{ useState }  from "react";
     //const App = ()=>{
    //  let newTime=new.Date().toLocaleTimeString();
    //const[ctime,setCtime]=useState(newTime);

    //  const UpdateTime =()=>{
    //    newTime = new Date().toLocaleDateString();
     //   setCtime(time);
   // };
    
    //setInterval(UpdateTime,1000);
   //return (
    //<>
     //   <h1>{ctime}</h1>

   // </>
   //);
   //};
   //export default App;





   //lect33-Handling events 

   
//import React,{ useState }  from "react";
     //const App = ()=>{

     // const purple="#8e44ad";
     // const [bg,setBg]= useState(purple);
     //const [name,setName]=useState("click Me");


         // const bgChange=()=> {
       // const purple="#8e44ad";
      // setBg(newBg);
      //setName("Ouch!!😱")
//};

       
   //};

   //return(
   //<>
       // <div style={{background:bg}}>
        //    <button onclick={bgChange} onDoubleClick={bgBack}>
        //{""}
        //{name}{""}
       // </button>
       // </div>
    //</>
  // );
  // };
   //export default App;