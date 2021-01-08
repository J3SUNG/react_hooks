import UseTitle from "../function/UseTitle";

const NewTitle = () => {
  const titleUpdater = UseTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 3000);
  return <></>;
};

export default NewTitle;
