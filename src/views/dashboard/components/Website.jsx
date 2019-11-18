import React, { useState } from "react";
import { Link } from "react-router-dom";
import { WORKSTATION } from "../../../constants/routes";
import { withRouter } from "react-router-dom";

const Website = props => {
  const [warning, setWarning] = useState({
    open: false
  });
  const toggleWarning = () => {
    setWarning({ open: !warning.open });
  };
const handleDelete = (Id) => {
  props.deleteWebsite(props.websiteId)
}
  return (
    <>
      <section className="website">
        {props.editEnabled ? (
          <>
            {warning.open ? (
              <div>
                <div className="warning">
                  Are you sure?
                  <p>
                    This action cannot be undone.
                  </p>
                  <div className="button-container">
                    <button className="btn" onClick={handleDelete}>Delete</button>
                    <button className="btn" onClick={toggleWarning}>Cancel</button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="action" to={WORKSTATION}>
                {props.name}
                <div className="button-container">
                  <button
                    onClick={toggleWarning}
                    className="delete btn"
                  >
                    Delete
                  </button>
                  <button className="btn">Rename</button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="exp-center-black">
            <Link className="action-btn" to={WORKSTATION}>
              {props.name}
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default withRouter(Website);
