import UseBeforeLeave from "../function/UseBeforeLeave";

const NewBeforeLeave = () => {
  const begForLife = () => console.log("Pls dont leave");
  UseBeforeLeave(begForLife);
  return <></>;
};

export default NewBeforeLeave;
