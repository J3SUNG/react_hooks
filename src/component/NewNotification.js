import UseNotification from "../function/UseNotification";

const NewNotification = () => {
  const triggerNotif = UseNotification("Hello, React hooks!", {
    body: "Nice React!",
  });
  return (
    <div className="App">
      <button onClick={triggerNotif}>Notif</button>
    </div>
  );
};

export default NewNotification;
