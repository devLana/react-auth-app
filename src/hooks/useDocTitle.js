import { useEffect } from "react";

const useDocTitle = (prefix, title = "React Auth App") => {
  useEffect(() => {
    document.title = prefix ? `${prefix} | ${title}` : title;
  });
};

export default useDocTitle;
