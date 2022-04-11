
import React, { useState } from 'react';
function App() {
   var [score,setScore]=useState(76);
   var [wicket,setWicket]=useState(2);
   var [ball,setBall]=useState(8.3);

   
  return (    
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{""}
          <h1 className="scoreCount">
            {
            score
              // show "score" here\
            
            }
          </h1>
        </div>
        <div>
          Wicket:{""}
          <h1 className="wicketCount">
            {
              wicket
              // show wicket here
             
            }
          </h1>
        </div>

        <div>
          Over:{""}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              ball
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={() =>{
        
           if(score<100){
               
                  setScore(score + 1);
              }
        }}>Add 1</button>
        <button className="addScore4" onClick={() =>{
          
           if(score<100){
                
                setScore(score + 4);
              }
        }}>Add 4</button>
        <button className="addScore6" onClick={() =>{
          
           if(score<100){
               
                setScore(score + 6);
              }
        }}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={() =>{
  
            if(wicket<12&&score<100){
                      setWicket(wicket + 1);
                
              }
        }} >Add 1 wicket</button>
       
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={() =>{
           if (Math.abs((ball % 1)-.6) < .0000001)
    ball += .5;
    else 
    ball += .1;
    if(score<100){
          setBall(ball);
        }
        }}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    <h1>{score>100?"India Wins":""}</h1>
    </div>
  );
}

export default App;
