import { useRef } from "react";
import DisplaySection from "./components/DisplaySection";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import SoundSystem from "./components/SoundSystem";
import WebgiViwer from "./components/WebgiViwer";
import Loader from "./components/Loader";

function App() {
  const webgiViewerRef = useRef();
  const contentRef = useRef();

  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview();
  };
  return (
    <div className="App">
      {/* <Loader /> */}
      <div id="content" ref={contentRef}>
        <Nav />
        <Jumbotron />
        <SoundSystem />
        <DisplaySection triggerPreview={handlePreview} />
      </div>
      <WebgiViwer contentRef={contentRef} ref={webgiViewerRef} />
    </div>
  );
}

export default App;
