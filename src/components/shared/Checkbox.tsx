import clsx from "clsx";
import React, { useState } from "react";

const Checkbox: React.FC<{ check: boolean }> = ({ check }) => {
  return (
    <div
      className={clsx(
        "w-5 h-5 rounded-full flex items-center justify-center border dark:border-gray-500 cursor-pointer",
        check ? "bg-gradient-to-br from-sky-400 to-purple-500 " : "bg-white dark:bgDark"
      )}
    >
      {check && <img src="/images/icon-check.svg" alt="check icon" className=" " />}
    </div>
  );
};

export default Checkbox;
