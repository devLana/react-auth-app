import { useState, useEffect } from "react";

const App = () => {
  const [str, setStr] = useState("");
  const [title] = useState("React made with Webpack & Babel");

  useEffect(() => {
    setStr(title);
  }, [title]);

  return <div>Hello {str}</div>;
};

export default App;
