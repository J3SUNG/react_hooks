import UseConfirm from "../function/UseConfirm";

const NewConfirm = () => {
  const deleteWorld = () => console.log("Deleting the world");
  const abort = () => console.log("Aborted");
  const confirmDelete = UseConfirm("Are you sure", deleteWorld, abort);
  return (
    <div>
      <div>UseConfirm</div>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default NewConfirm;
