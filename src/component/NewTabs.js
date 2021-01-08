import UseTabs from "../function/UseTabs";

const content = [
  {
    tab: "Section 1",
    content: "This is the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "This is the content of the Section 2",
  },
];

const NewTabs = () => {
  const { currentItem, changeItem } = UseTabs(0, content);
  return (
    <div>
      <div>UseTabs</div>
      <div>
        {content.map((section, index) => (
          <button key={index} onClick={() => changeItem(index)}>
            {section.tab}
          </button>
        ))}
      </div>
      <div>{currentItem.content}</div>
    </div>
  );
};

export default NewTabs;
