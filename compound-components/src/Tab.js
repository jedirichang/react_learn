import { createContext, useContext } from "react";
import "./Tab.css";

const TabContext = createContext();
export default function Tab({ children, currentTab, onChange }) {
  return (
    <div>
      <TabContext.Provider value={{ currentTab, onChange }}>
        {children}
      </TabContext.Provider>
    </div>
  );
}

Tab.HeadsContainer = ({ children }) => {
  return <div>{children}</div>;
};

Tab.Item = ({ label, index, children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { currentTab, onChange } = useContext(TabContext);
  return (
    <div
      className={currentTab === index ? "active" : ""}
      onClick={() => onChange(index)}
    >
      {label}
    </div>
  );
};

Tab.ContentContainer = ({ children }) => {
  return <div>{children}</div>;
};

Tab.Content = ({ children, index }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { currentTab } = useContext(TabContext);
  return currentTab === index ? <div>{children}</div> : null;
};
