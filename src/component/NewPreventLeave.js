import UsePreventLeave from "../function/UsePreventLeave";

const NewPreventLeave = () => {
  const { enablePrevent, disablePrevent } = UsePreventLeave();
  return (
    <div>
      <div>UsePreventLeave</div>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
};

export default NewPreventLeave;
