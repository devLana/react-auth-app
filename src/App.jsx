import { useState, useEffect } from "react";

const App = () => {
  const [str, setStr] = useState("");
  const title = "React made with Webpack & Babel";

  useEffect(() => {
    setStr(title);
  }, []);

  return <div>Hello {str}</div>;
};

export default App;
