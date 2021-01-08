import UseClick from "../function/UseClick";

const NewClick = () => {
  const onClick = () => console.log("Hello!");
  const title = UseClick(onClick);
  return (
    <div>
      <div>UseClick</div>
      <h1 ref={title}> Hello </h1>
    </div>
  );
};

export default NewClick;
