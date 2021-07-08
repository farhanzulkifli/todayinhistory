import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import MyComponent from "./Timeline";
import { useHistory } from "react-router";
import Displaydate from "./Displaydate";

const Events3 = () => {
  const params = useParams();
  const history = useHistory();
  const url = `https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/${params.month}/${params.day}`;
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
      return {
        start_date: { year: x?.year },
        text: { headline: x?.pages[0]?.displaytitle, text: x?.text },
        media: { url: x?.pages[0]?.content_urls?.desktop?.page },
        background: {
          url: "https://picsum.photos/1280/1024?random=" + index + ".jpeg",
        },
      };
    };
    console.log();
    transformeddata.push(transform(item));
  }
  console.log("transformeddata", transformeddata);

  const homebutton = () => {
    history.push(`/`);
    window.location.reload();
  };
  return (
    <div>
      <Displaydate day ={params.day} month={params.month}/>
      <MyComponent data={transformeddata} />
      <button onClick={homebutton}>Home</button>
    </div>
  );
};

export default Events3;
