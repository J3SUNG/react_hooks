import UseFadeIn from "../function/UseFadeIn";

const NewFadeIn = () => {
  const fadeInH1 = UseFadeIn(3);
  const fadeInP = UseFadeIn(2, 3);
  return (
    <div>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>Nice to meet you!</p>
    </div>
  );
};

export default NewFadeIn;
