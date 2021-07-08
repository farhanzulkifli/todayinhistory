import Timeline from "timelinejs-react";
// import React, {useState,useEffect } from "react";


const MyComponent = (props) => {
  
  // const photourl = "https://api.unsplash.com/photos/random/?client_id="
  // const accesskey = "zmI5uFQBqdi-jXdbi8G_gQ2d4Q2fA9myNPp2Q9QJz-s"
  // const mediaurl = photourl + accesskey
  // const [factor, setFactor] = useState([]);

  // useEffect(() => {
  //   fetch(mediaurl)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setFactor(data);
  //     });
  // }, [mediaurl]);

  // console.log(factor.urls)

  const title = {
    text: {
        headline: "Hey",
        text: "Let me tell you some cool f**kin' s**t that happened on the day you wished you were never born.",
    },
    media: {
      url: "https://source.unsplash.com/random",
    },
    background: {
      // url: "https://picsum.photos/1400/600.jpg",
      // url: photourl + accesskey
      // url: factor.urls?.thumbnail + ".jpeg"
      // url: "https://images.pexels.com/photos/2014422/pexels-photo-2014422"
      url: "https://picsum.photos/1280/1024.jpg"
    },
  };
  console.log("url", title.background.url); 
  const options = {};
  const trial = (
    <Timeline
      target={<div className="timeline" style={{height: "600px", width:"100%"}}/>}
      events={props.data}
      title={title} // optional
      options={options} // optional
    />
  );

  return props.data.length <= 0 ? <p>Loading!</p> : trial;
};
export default MyComponent;
