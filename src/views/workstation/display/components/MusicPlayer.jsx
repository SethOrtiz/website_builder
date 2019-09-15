import React from "react";

const styles = {
  musicPlayer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 5fr",
    height: "100%",
    background: "rgba(0,0,0,0)"
  },
  title: {
    display: "flex",
    fontSize: "3rem",
    fontWeight: "600",
    color: "#fffef9"
  },
  trackContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gridAutoRows: "40px",
  },
  track: {
    display: "grid",
    gridTemplateColumns: "1fr 8fr 1fr",
    alignItems: "center",
    fontSize: "0.9rem",
    padding: "0 0.5em 0 1em",
    color: "#fffef9"
  },
  coverContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  },
  cover: {
    backgroundImage: "linear-gradient(45deg, #111, #999, #fff6e9)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "25em",
    height: "25em",
    boxShadow: "0.2em 0 1em #222"
  }
};

const MusicPlayer = props => {
  return (
    <section style={styles.musicPlayer}>
      <div></div>
      <div></div>
      <div>
      <div style={styles.title}>Album Title</div>
        <div style={styles.trackContainer}>
          {props.tracksLoading ? (
            <div className="loaderContainer">
              <div className="loader">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          ) : props.tracks ? (
            props.tracks.map((obj, index) => {
              return (
                <div style={styles.track}>
                  <div>{obj.number}</div> <div>{obj.title}</div> <div>+</div>
                </div>
              );
            })
          ) : (
            <>
              <div style={styles.track}>
                <div>1</div> <button className="track-btn">Intro</button>
                <button className="track-btn">+</button>
              </div>
              <div style={styles.track}>
                <div>2</div> <button className="track-btn">Single</button>
                <button className="track-btn">+</button>
              </div>
              <div style={styles.track}>
                <div>3</div> <button className="track-btn">Featured</button>
                <button className="track-btn">+</button>
              </div>
              <div style={styles.track}>
                <div>4</div> <button className="track-btn">Featured</button>
                <button className="track-btn">+</button>
              </div>
              <div style={styles.track}>
                <div>5</div> <button className="track-btn">Featured</button>
                <button className="track-btn">+</button>
              </div>
              <div style={styles.track}>
                <div>6</div> <button className="track-btn">Featured</button>
                <button className="track-btn">+</button>
              </div>
              <div style={styles.track}>
                <div>7</div> <button className="track-btn">Featured</button>
                <button className="track-btn">+</button>
              </div>
              <div style={styles.track}>
                <div>8</div> <button className="track-btn">Featured</button>
                <button className="track-btn">+</button>
              </div>
              <div style={styles.track}>
                <div>9</div> <button className="track-btn">Featured</button>
                <button className="track-btn">+</button>
              </div>
              <div style={styles.track}>
                <div>10</div> <button className="track-btn">Outro</button>
                <button className="track-btn">+</button>
              </div>
            </>
          )}
        </div>
      </div>
      <div style={styles.coverContainer}>
        <div style={styles.cover}></div>
      </div>
    </section>
  );
};

export default MusicPlayer;
