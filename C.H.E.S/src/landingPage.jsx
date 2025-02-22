export default function Username() {
  return (
    <div>
      <div>
        {/* <img
            className="mx-auto h-10 w-auto"
            src="media/favicon.png"
            alt="rotating logo"
          /> */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full"
        >
          <source src="media/Background_Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div>
        <form>
          <div>
            <label htmlFor="name">
              <h1
                style={{
                  color: "#ff0000",
                }}
              >
                Enter your username
              </h1>
            </label>
            <div>
              <input
                type="text"
                name="name"
                id="name"
                style={{
                  height: "20px",
                  width: "auto",
                }}
              />
            </div>
          </div>

          <div
            style={{
              margin: "27px",
            }}
          >
            <button
              style={{
                color: "#ff0000",
              }}
            >
              Enter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
