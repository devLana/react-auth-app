import { useState, useEffect } from "react";

const App = () => {
  const [str, setStr] = useState("");

  useEffect(() => {
    setStr("React made with Webpack & Babel");
  }, []);

  return <div>Hello {str}</div>;
};

export default App;
