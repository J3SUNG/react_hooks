import UseInput from "../function/UseInput";

const NewInput = () => {
  const maxLen = (value) => value.length <= 10;
  const name = UseInput("", maxLen);
  return (
    <div>
      <div>UseInput</div>
      <input placeholder="What's you are name?" {...name} />
    </div>
  );
};

export default NewInput;
