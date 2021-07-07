import React, { useState } from "react";
import Timeline from "timelinejs-react";

const MyComponent = (props) => {
  const events = [];
  console.log("events", events);
  const title = {
    text: {
      headline: "Cool F****n' S**t that happened on the day you were born",
      text: "And now you wish you could crawl back into your mum's ***** and stay there!",
    },
    media: {
      url: "https://i.dailymail.co.uk/i/pix/2017/01/10/09/3C03E72D00000578-4104786-image-a-36_1484041024184.jpg",
    },
    background: {
      url: "https://lp-cms-production.imgix.net/2021-04/500pxRF_14967543.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850",
      color: "blue",
    },
  };
  const options = { font:"abril-droidsans", height: "100%", width: "100%" };
  console.log("props", props.data);
  const trial = (
    <Timeline
      target={<div className="timeline" style={{height: "800px", width:"100%"}}/>}
      events={props.data}
      title={title} // optional
      options={options} // optional
    />
  );

  return props.data.length <= 0 ? <p>Loading!</p> : trial;
};
export default MyComponent;
