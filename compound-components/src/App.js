import { useState } from "react";
import Tab from "./Tab";

function App() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleChange = (newIndex) => {
    setCurrentTabIndex(newIndex);
  };

  return (
    <Tab currentTab={currentTabIndex} onChange={handleChange}>
      <Tab.HeadsContainer>
        <Tab.Item label="Tab1" index={0} />
        <Tab.Item label="Tab2" index={1} />
        <Tab.Item label="Tab3" index={2} />
        <Tab.Item label="Tab4" index={3} />
      </Tab.HeadsContainer>
      <Tab.ContentContainer>
        <Tab.Content index={0}>
          <h1>Test1</h1>
        </Tab.Content>
        <Tab.Content index={1}>
          <h1>Test2</h1>
        </Tab.Content>
        <Tab.Content index={2}>
          <h1>Test3</h1>
        </Tab.Content>
        <Tab.Content index={3}>
          <h1>Test4</h1>
        </Tab.Content>
      </Tab.ContentContainer>
    </Tab>
  );
}

export default App;
