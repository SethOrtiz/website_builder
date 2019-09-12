import React from "react";
import { withRouter } from "react-router-dom";
/* COLOR SCHEME */
/* blue: #d2e7ff  | babyblue: #e3f0ff  | white : #fffef9  | peach: #ffefd7  | lightpeach: #fff6e9 | salmon: "#e3c9c9"*/
///////////////////////////////////////////       STYLING

const styles = {
  toolbox: {
    height: "92vh",
    boxSizing: "border-box",
    border: "2px solid #000",
    backgroundColor: "#fffef9",
    display: "grid",
    gridTemplateRows: "7fr 1fr",
    color: "#000"
  },
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    flexDirection: "column",
    padding: "10%"
  },
  title: {
    fontSize: "2em",
    marginBottom: "1em",
  },
  tool: {
  },
  form: {
    borderTop: "3px solid #000",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-center",
    justifyContent: "space-around"
  },
  update: {
    display: "grid",
    gridTemplateRows: "auto",
    gridTemplateColumns: "11fr 1fr"
  },
  add: {
    fontSize: "3em",
    backgroundColor: "inherit",
    border: "none",
    outline: "none",
    fontWeight: "700",
  },
  feedback: {
    width: "5%",
    height: "100%",
    backgroundColor: "darkred"
  }
};

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
    <section id="toolbox" style={styles.toolbox}>
      <div style={styles.main}>
        <h1 style={styles.title}>Tools</h1>
        <ul>
          {props.tools && (props.tools.map(obj => {
            return (
              <div key={obj.id.toString()} style={styles.update}>
                <li style={styles.note}>{obj.content}</li>
                <button className="opacity" style={styles.delete}>
                  -
                </button>
              </div>
            );
          }))}
        </ul>
      </div>
    </section>
  );
};

export default withRouter(Toolbox);
