import React, { useState, useEffect, } from "react";
import { useParams } from "react-router";
import MyComponent from "./Timeline";
import { useHistory } from "react-router";


const Events2 = () => {
  const params = useParams();
  const history = useHistory();
  const url = `https://byabbe.se/on-this-day/${params.month}/${params.day}/events.json`;
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.events);
      });
  }, [url]);
  console.log("data",data)
  const transform = (x) =>{
    return {"start_date": {"year":x.year},"text":{"text":x.description},}
 }
 const transformeddata = []
 for (const item of data){
  transformeddata.push(transform(item)) 
 }
 console.log("transformeddata",transformeddata)
 const homebutton = () => {history.push(`/`)}
//  const content = data.map((content) => {
//     return (
//       <>
//         <div>{content.year}</div>
//         <div>{content.description}</div>
//       </>
//     );
//   });
  return (
  <div>
    {/* {content} */}
    <MyComponent data = {transformeddata}/>
    <button onClick = {homebutton}>Home</button>
    </div>
  )
};

export default Events2;
