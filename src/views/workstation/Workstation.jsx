import React from "react";
import DisplayContainer from "../../redux/workstation/sections/DisplayContainer";
import ToolboxContainer from "../../redux/workstation/tools/ToolboxContainer";

export default function Workstation() {
  return (
    <>
      <div className="workstation">
        <aside className="aside">
          <ToolboxContainer />
        </aside>
        <main className="main">
          <DisplayContainer />
        </main>
      </div>
    </>
  );
}
