/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const scene = [
  {
    name: "hero",
    x: -3,
    y: -2,
  },
  {
    name: "about",
    x: 66,
    y: 90,
  },
  {
    name: "recruit",
    x: 163,
    y: 186,
  },
  {
    name: "apply",
    x: 258,
    y: 281,
  },
  {
    name: "career",
    x: 362,
    y: 371,
  },
  {
    name: "entry",
    x: 450,
    y: 473,
  },
  {
    name: "blog",
    x: 545,
    y: 568,
  },
  {
    name: "black",
    x: 114,
    y: 137,
  },
  {
    name: "white",
    x: 209,
    y: 232,
  },
];

function SequenceDefault({ on, dark }) {
  const [index, setIndex] = useState(-3);
  const [current, setCurrent] = useState(scene[0]);
  const [reverse, setReverse] = useState(false);
  const [lag, setLag] = useState(50);
  const [prevOn, setPrevOn] = useState(0);

  const [scale, setScale] = useState("1");
  const [position, setPosition] = useState("0%");

  useEffect(() => {
    const tmp = on;

    switch (tmp) {
      case 0:
        setScale("1");
        setPosition("0%");
        break;
      case 1:
        setScale("0.5");
        setPosition("45%");
        break;
      case 2:
        setScale("0.6");
        setPosition("-45%");
        break;
      case 3:
        setScale("0.6");
        setPosition("45%");
        break;
      case 4:
        setScale("0.4");
        setPosition("-60%");
        break;
      case 5:
        setScale("0.5");
        setPosition("40%");
        break;
      case 6:
        setScale("0.5");
        setPosition("-50%");
        break;
      case 7:
        setScale("0.5");
        setPosition("0%");
        break;
      case 8:
        setScale("0.5");
        setPosition("0%");
        break;
    }
  }, [on]);

  useEffect(() => {
    updateIndex();
  }, [index]);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const updateIndex = async () => {
    await delay(lag);

    if (on !== prevOn) {
      const tmp = on;
      switch (tmp) {
        case 0:
          setIndex(-3);
          setReverse(false);
          break;
        case 1:
          setIndex(20);
          setReverse(false);
          break;
        case 2:
          setIndex(132);
          setReverse(false);
          break;
        case 3:
          setIndex(235);
          setReverse(false);
          break;
        case 4:
          setIndex(325);
          setReverse(false);
          break;
        case 5:
          setIndex(422);
          setReverse(false);
          break;
        case 6:
          setIndex(519);
          setReverse(false);
          break;
        case 7:
          setIndex(114);
          setReverse(false);
          break;
        case 8:
          setIndex(209);
          setReverse(false);
          break;
      }
      setPrevOn(on);
      setCurrent(scene[on]);
    } else {
      if (index >= current?.x && index <= current?.y) {
        setLag(50);
      } else {
        setLag(10);
      }

      if (reverse) {
        if (index - 1 > current?.x) setIndex(index - 1);
        else {
          setIndex(index + 1);
          setReverse(false);
        }
      } else {
        if (index + 1 < current?.y) setIndex(index + 1);
        else {
          setIndex(index - 1);
          setReverse(true);
        }
      }
    }
  };

  const images = () => {
    return Array.from(Array(568).keys()).map((i) => {
      return (
        <div
          key={i}
          className="h-full w-full absolute bg-contain bg-center bg-no-repeat"
          style={{
            visibility: i !== index ? "hidden" : "visible",
            backgroundImage: `url('${`/sequence/frame_${(i + 1)
              .toString()
              .padStart(5, "0")}.png`}')`,
          }}
        />
      );
    });
  };

  return (
    <div
      className="absolute w-full hidden md:block"
      style={{
        height: "700vh",
        zIndex: -2,
        backgroundColor: dark ? "black" : "white",
        transition: "all 0.2s ease-in",
      }}
    >
      <div className="h-screen w-screen sticky top-0 overflow-hidden">
        <div
          className="h-full relative"
          style={{
            transform: `scale(${scale}) translateX(${position})`,
            transition: "all 0.2s ease-in",
          }}
        >
          {images()}
        </div>
      </div>
    </div>
  );
}

export default SequenceDefault;
