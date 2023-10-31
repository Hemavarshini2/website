import React,{useState} from 'react'

function Hemz() {
const [counts1,setCounts1]=useState(0)
function myfunc(){
  setCounts1(counts1+1)
}
function myfunc2(){
  setCounts1(counts1-1)
}
return (
  <>
  <button onClick={myfunc}>in</button>
  <span>{counts1}</span>
  <button onMouseOver={myfunc2}>out</button>
  
  
  </>
)
}
export default Hemz