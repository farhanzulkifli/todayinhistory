import React, { useState, useEffect } from "react";
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

  const transformeddata = [];
  for (let [index, item] of data.entries()) {
    const transform = (x) => {
      const finalurl =
        x?.wikipedia[0]?.wikipedia.substring(0, 8) +
        "en." +
        x?.wikipedia[0]?.wikipedia.substring(8, x?.wikipedia[0]?.wikipedia?.length);
      return {
  
        start_date: { year: x.year.includes(" ") ? '-' +  x?.year.replace(/[ a-z]/ig, ''): x?.year
        // start_date: { year: x.year.includes("BC") ? parseInt(x?.year.slice(0, -3))*-1 : x?.year
      },
        text: { headline: x?.wikipedia[0]?.title, text: x?.description },
        media: { url: finalurl },
        background: {
          url: "https://picsum.photos/1280/1024?random=" + index + ".jpeg",
        },
      };
    };
    console.log()
    transformeddata.push(transform(item));
    console.log("item", item);
  }
  console.log("transformeddata", transformeddata);
  const homebutton = () => {
    history.push(`/`);
  };
  // const prevbutton = () => {
  //   history.push(`/`);
  // };
  // const nextbutton = () => {
  //   history.push(`/`);
  // };
  return (
    <div>
      <MyComponent data={transformeddata} />
      {/* <button onClick={prevbutton}>Prev</button> */}
      <button onClick={homebutton}>Home</button>
      {/* <button onClick={nextbutton}>Next</button> */}
    </div>
  );
};

export default Events2;
