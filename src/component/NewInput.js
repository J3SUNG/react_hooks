import UseInput from "../function/UseInput";

const NewInput = () => {
  const maxLen = (value) => value.length <= 10;
  const name = UseInput("Mr.", maxLen);
  return (
    <div>
      <div>UseInput</div>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default NewInput;
