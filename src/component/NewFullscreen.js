import UseFullscreen from "../function/UseFullscreen";

const NewFullscreen = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = UseFullscreen(onFullS);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img
          style={{ height: "500px" }}
          src="https://pbs.twimg.com/media/Dp6hsEFV4AA_GN-.jpg"
        />
        <br />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
};

export default NewFullscreen;
