import "./styles.css";
import { useState } from "react";

const data = [
  {
    src: "https://picsum.photos/seed/img1/600/400",
    alt: "Image 1 for carousel"
  },
  {
    src: "https://picsum.photos/seed/img2/600/400",
    alt: "Image 2 for carousel"
  },
  {
    src: "https://picsum.photos/seed/img3/600/400",
    alt: "Image 3 for carousel"
  }
];

function Carousel() {
  let [current, setCurrent] = useState(0);

  const leftclick = () => {
    setCurrent(current - 1);
    console.log(current);
  };

  const rightclick = () => {
    setCurrent(current + 1);
    console.log(current);
  };

  return (
    <div className="carousel">
      <div className="leftbtn" onClick={leftclick}>
        {" "}
        ←{" "}
      </div>
      {data.map((img, idx) => {
        return (
          <img
            src={img.src}
            alt={img.alt}
            key={idx}
            className={current === idx ? "showImg" : "dontshowImg"}
            // style={{ transform: `translateX(-${current}px)` }}
          ></img>
        );
      })}
      <div className="rightbtn" onClick={rightclick}>
        {" "}
        →{" "}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}

      <Carousel />
    </div>
  );
}
