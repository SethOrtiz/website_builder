import React from "react";
import { withRouter } from "react-router-dom";
/* COLOR SCHEME */
/* blue: #d2e7ff  | babyblue: #e3f0ff  | white : #fffef9  | peach: #ffefd7  | lightpeach: #fff6e9 | salmon: "#e3c9c9"*/
///////////////////////////////////////////       STYLING

const styles = {
  toolbox: {
    height: "100vh",
    boxSizing: "border-box",
    border: "2px solid #000",
    backgroundColor: "#fffef9",
    display: "grid",
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
    marginBottom: "1em"
  },
  tool: {},
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
  feedback: {
    width: "5%",
    height: "100%",
    backgroundColor: "darkred"
  },
  buttonContainer: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))"
  },
  mainButton: {
    height: "100%",
    fontSize: "2em",
    backgroundColor: "#fffef9",
    border: "2px solid #000",
    color: "#000",
    fontWeight: "600",
    alignSelf: "center",
    lineHeight: "1.5"
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
        <h1 style={styles.title}>Hubstereo</h1>
        <div style={styles.buttonContainer}>
          <button className="btn" style={styles.mainButton}>Publish</button>
          <button className="btn" style={styles.mainButton}>Preview</button>
        </div>
        <ul>
          {props.tools &&
            props.tools.map(obj => {
              return (
                <div key={obj.id.toString()} style={styles.update}>
                  <li style={styles.tool}>{obj.content}</li>
                  <button className="opacity" style={styles.delete}>
                    -
                  </button>
                </div>
              );
            })}
        </ul>
      </div>
    </section>
  );
};

export default withRouter(Toolbox);
