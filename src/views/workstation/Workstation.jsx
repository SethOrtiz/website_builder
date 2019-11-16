import React from "react";
import DisplayContainer from "../../redux/workstation/sections/DisplayContainer";
import ToolboxContainer from "../../redux/workstation/tools/ToolboxContainer";

export default function Workstation() {
  return (
    <>
      <div className="workstation">
        <aside >
          <ToolboxContainer />
        </aside>
        <main>
          <DisplayContainer />
        </main>
      </div>
    </>
  );
}
