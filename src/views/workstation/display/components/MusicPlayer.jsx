import React from "react";

const MusicPlayer = props => {
  return (
    <section className="music-player">
      <div className="main-container">
        <div className="title">Album Title</div>
        <div className="track-container">
          {props.tracksLoading ? (
            <div className="loader-container">
              <div className="loader">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          ) : props.tracks ? (
            props.tracks.map((obj, index) => {
              return (
                <div className="track">
                  <div>{obj.number}</div> <div>{obj.title}</div> <div>+</div>
                </div>
              );
            })
          ) : (
            <>
              <div className="track">
                <div>1</div> <button>Featured</button>
                <button>+</button>
              </div>
              <div className="track">
                <div>2</div> <button>Featured</button>
                <button>+</button>
              </div>
              <div className="track">
                <div>3</div> <button>Featured</button>
                <button>+</button>
              </div>
              <div className="track">
                <div>4</div> <button>Featured</button>
                <button>+</button>
              </div>
              <div className="track">
                <div>5</div> <button>Featured</button>
                <button>+</button>
              </div>
              <div className="track">
                <div>6</div> <button>Featured</button>
                <button>+</button>
              </div>
              <div className="track">
                <div>7</div> <button>Featured</button>
                <button>+</button>
              </div>
              <div className="track">
                <div>8</div> <button>Featured</button>
                <button>+</button>
              </div>
              <div className="track">
                <div>9</div> <button>Featured</button>
                <button>+</button>
              </div>
              <div className="track">
                <div>10</div> <button>Featured</button>
                <button>+</button>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="cover-container">
        <div
          className="cover"
          style={{
            backgroundImage: `url(${props.coverImage})`
          }}
        ></div>
      </div>
    </section>
  );
};

export default MusicPlayer;
