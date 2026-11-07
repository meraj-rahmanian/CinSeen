import { useEffect, useRef } from "react";
import "../styles/style.css";
import { item } from "../../public/bigDB";
import { Link } from "react-router";

export default function Vitrin() {
  const ref = useRef(null);

  useEffect(() => {
    const scroll = ref.current;
    scroll.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        scroll.scrollLeft += e.deltaY;
      },
      { passive: false, behavior: "smooth" },
    );
  }, []);

  return (
    <div
      className="w-full h-[52vh] flex overflow-y-hidden overflow-x-auto gap-3 scrollbar-none"
      ref={ref}
    >
      {item.map((item, index) => {
        return (
          <Link
            to={`/Movie/${item.id}`}
            className="card_body hero-hover"
            key={index}
          >
            <div className="card_img_body">
              <img className="card_img" src={item.img} alt={item.name} />
            </div>
            <div className="card_info">
              <h4 className="w-full h-[40%] text-lg overflow-hidden">
                {item.name}
              </h4>
              <h5 className="h-[30%] w-full text-lg font-normal text-[#FFFFFF80]">
                {item.date}
              </h5>
              <div className="h-[30%] w-full mt-0.5 flex flex-row justify-between overflow-hidden">
                <span className="flex text-normal items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5 text-[#21a2f8c5]"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-0.5 font-normal">{item.point}</span>{" "}
                  <span className="text-md font-normal text-[#FFFFFF80] flex items-center justify-center">
                    /10
                  </span>
                </span>
                <span className="card_ganre">{item.ganre}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
