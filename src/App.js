import { useSelector } from "react-redux";
import Header from "./components/organisms/Header";
import ModalBlock from "./components/organisms/ModalBlock";
import TabBlock from "./components/organisms/TabBlock";

function App() {
  const { isOpen, listTitle, listText } = useSelector((store) => store.modal);

  return (
    <div className="App">
      {isOpen && <ModalBlock listTitle={listTitle} listText={listText} />}
      <Header />
      <TabBlock />
    </div>
  );
}

export default App;
