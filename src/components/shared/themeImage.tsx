import React from "react";
import { useTheme } from "next-themes";

function ThemedImage() {
  const { theme, setTheme } = useTheme();

  // set Loading if theme is not found
  if (!theme) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <button
        onClick={() => {
          theme === "dark" ? setTheme("light") : setTheme("dark");
        }}
        className="w-5 h-5"
      >
        {theme == "dark" ? <img src="/images/icon-sun.svg" /> : <img src="/images/icon-moon.svg" />}
      </button>
    </div>
  );
}
export default React.memo(ThemedImage);
