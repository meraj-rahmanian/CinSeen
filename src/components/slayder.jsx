import "/CinSeen/src/styles/style.css";
import { movies } from "../../public/db";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Slayder() {
  const [slayd, setSlayd] = useState(0);

  useEffect(() => {
    const timer = setTimeout(scrollSlayd_pas, 4000);

    return () => clearTimeout(timer);
  }, [slayd]);

  function item_loc(i) {
    let level = i - slayd;
    let length = movies.length;
    if (level > length / 2) {
      level = level - length;
    } else if (level < -length / 2) {
      level = level + length;
    }
    return level;
  }

  function scrollSlayd_neg() {
    if (slayd == 0) {
      setSlayd(movies.length - 1);
    } else {
      setSlayd((per) => per - 1);
    }
  }

  function scrollSlayd_pas() {
    if (slayd == movies.length - 1) {
      setSlayd(0);
    } else {
      setSlayd((per) => per + 1);
    }
  }
  return (
    <>
      <div className="h-[calc(100vh-60px)] w-full bg-black pt-20 flex flex-row justify-center items-center">
        <div className="flex">
          <button
            onClick={scrollSlayd_neg}
            className="flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-10 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <div className="h-[70vh] w-[200vh] overflow-hidden flex shrink-0 relative">
            {movies.map((item, index) => {
              const loc = item_loc(index);
              const isActive = loc === 0;
              const gadr = loc < 0 ? -loc : loc;
              const isVisible = gadr <= 2;
              const isFar = gadr === 2;

              return (
                <Link
                  to={`/Movie/${item.id}`}
                  key={index}
                  className="w-[60vh] h-full absolute top-0 left-1/2 transition-all duration-500 ease-in-out"
                  style={{
                    transform: `translateX(calc(-50% + ${loc * 45}vh)) scale(${isActive ? 1 : isFar ? 0.6 : 0.7})`,
                    opacity: isVisible ? (isActive ? 1 : 0.5) : 0,
                    zIndex: isActive ? 10 : 1,
                  }}
                >
                  <img
                    className="object-contain h-full w-full"
                    src={item.img}
                    alt={item.name}
                  />
                </Link>
              );
            })}
          </div>

          <button
            onClick={scrollSlayd_pas}
            className="flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-10 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
