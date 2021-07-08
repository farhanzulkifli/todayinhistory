import Timeline from "timelinejs-react";

const MyComponent = (props) => {
  const title = {
    text: {
      headline: "Story time!",
      text: "Let me tell you some cool s**t that happened on the day you wished you were never born.",
    },
    media: {
      url: "https://source.unsplash.com/random",
    },
    background: {
      url: "https://picsum.photos/1280/1024.jpg",
    },
  };
  console.log("url", title.background.url);
  const options = {};
  const trial = (
    <Timeline
      target={
        <div
          className="timeline"
          style={{ height: "600px", width: "100%", margin: "30px 0 50px 0" }}
        />
      }
      events={props.data}
      title={title} // optional
      options={options} // optional
    />
  );

  return props.data.length <= 0 ? (
    <div className="loadingtext" style={{ display:"flex", justifyContent: "center" ,alignItems: "center", margin: "330px"}}>
      Loading!
    </div>
  ) : (
    trial
  );
};
export default MyComponent;
