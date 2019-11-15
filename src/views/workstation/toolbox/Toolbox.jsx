import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { PREVIEW } from "../../../constants/routes";

const Toolbox = props => {
  ///////////////////////////////////////////     STATE DECLARATION
  // const [newUnit, setNewUnit] = useState({
  //   value: ""
  // });
  // const [empty, setEmpty] = useState({
  //   value: false
  // });

  ///////////////////////////////////////////     RESET WHEN COMPONENT MOUNTS
  // useEffect(() => {
  //   setEmpty({ value: false });
  // }, []);

  ///////////////////////////////////////////     UPDATE VALUE ON CHANGE
  // const handleChange = e => {
  //   e.preventDefault();
  //   const { value } = e.target;
  //   setNewUnit({ value });
  //   setEmpty({
  //     value: false
  //   });
  // };

  ///////////////////////////////////////////     RESETS AFTER SUCCESSFUL SUBMITION
  // const resetState = () => {
  //   setNewUnit({
  //     value: ""
  //   });
  // };

  ///////////////////////////////////////////       CREATES A NEW NOTE
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (newUnit.value) {
  //     props.addUnit(props.websiteId, newUnit.value);
  //     resetState();
  //   } else {
  //     setEmpty({
  //       value: true
  //     });
  //   }
  // };

  ///////////////////////////////////////////       JSX
  return (
    <section id="toolbox" className="toolbox">
      <div className="main">
        <h1 className="title">Hubstereo</h1>
        <div className="button-container">
          <button className="main-button btn">
            Publish
          </button>
          <button className="main-button btn">
            <Link
              to={PREVIEW}
            >
              Preview
            </Link>
          </button>
        </div>
        <h2 className="subtitle">Tools</h2>
        <div className="container">
          <ul>
            {props.tools &&
              props.tools.map(obj => {
                return (
                  <div key={obj.id.toString()} className="update">
                    <li className="tool">{obj.content}</li>
                    <button className="delete opacity">
                      -
                    </button>
                  </div>
                );
              })}
          </ul>
        </div>
        <h2 className="subtitle">Sections</h2>
        <div className="container"></div>
      </div>
    </section>
  );
};

export default withRouter(Toolbox);
