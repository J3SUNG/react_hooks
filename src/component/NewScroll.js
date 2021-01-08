import UseScroll from "../function/UseScroll";

const NewScroll = () => {
  const { y } = UseScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        Hello
      </h1>
    </div>
  );
};

export default NewScroll;
