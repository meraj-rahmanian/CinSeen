import { Link } from "react-router";
import { items } from "../../public/hugeDB";

export default function Movise() {
  const item = items;
  return (
    <div>
      <form
        action="#"
        className="pt-15 2xl:pt-25 lg:pt-20 pl-5 z-30 flex gap-3"
      >
        <select className="select_fild" name="filter">
          <option className="hidden">Genre</option>
          <option className="select_item" value="Action">
            Action
          </option>
          <option className="select_item" value="Adventure">
            Adventure
          </option>
          <option className="select_item" value="Animation">
            Animation
          </option>
          <option className="select_item" value="Comedy">
            Comedy
          </option>
          <option className="select_item" value="Crime">
            Crime
          </option>
          <option className="select_item" value="Documentary">
            Documentary
          </option>
          <option className="select_item" value="Drama">
            Drama
          </option>
          <option className="select_item" value="Fantasy">
            Fantasy
          </option>
          <option className="select_item" value="Horror">
            Horror
          </option>
          <option className="select_item" value="Mystery">
            Mystery
          </option>
          <option className="select_item" value="Romance">
            Romance
          </option>
          <option className="select_item" value="Sci-Fi">
            Sci-Fi
          </option>
          <option className="select_item" value="Thriller">
            Thriller
          </option>
          <option className="select_item" value="War">
            War
          </option>
        </select>
        <select className="select_fild" name="year">
          <option className="hidden">Year</option>
          <option className="select_item" value="2027">
            2027
          </option>
          <option className="select_item" value="2026">
            2026
          </option>
          <option className="select_item" value="2025">
            2025
          </option>
          <option className="select_item" value="2024">
            2024
          </option>
          <option className="select_item" value="2023">
            2023
          </option>
          <option className="select_item" value="2022">
            2022
          </option>
          <option className="select_item" value="2021">
            2021
          </option>
          <option className="select_item" value="2020">
            2020
          </option>
          <option className="select_item" value="2019">
            2019
          </option>
          <option className="select_item" value="2018">
            2018
          </option>
          <option className="select_item" value="2017">
            2017
          </option>
          <option className="select_item" value="2016">
            2016
          </option>
          <option className="select_item" value="2015">
            2015
          </option>
          <option className="select_item" value="2014">
            2014
          </option>
          <option className="select_item" value="2013">
            2013
          </option>
          <option className="select_item" value="2012">
            2012
          </option>
          <option className="select_item" value="2011">
            2011
          </option>
          <option className="select_item" value="2010">
            2010
          </option>
          <option className="select_item" value="2009">
            2009
          </option>
          <option className="select_item" value="2008">
            2008
          </option>
          <option className="select_item" value="2007">
            2007
          </option>
          <option className="select_item" value="2006">
            2006
          </option>
          <option className="select_item" value="2005">
            2005
          </option>
          <option className="select_item" value="2004">
            2004
          </option>
          <option className="select_item" value="2003">
            2003
          </option>
          <option className="select_item" value="2002">
            2002
          </option>
          <option className="select_item" value="2001">
            2001
          </option>
          <option className="select_item" value="2000">
            2000
          </option>
        </select>
        <select className="select_fild" name="rating">
          <option className="hidden">Rating</option>
          <option className="select_item" value="1">
            1
          </option>
          <option className="select_item" value="2">
            2
          </option>
          <option className="select_item" value="3">
            3
          </option>
          <option className="select_item" value="4">
            4
          </option>
          <option className="select_item" value="5">
            5
          </option>
          <option className="select_item" value="6">
            6
          </option>
          <option className="select_item" value="7">
            7
          </option>
          <option className="select_item" value="8">
            8
          </option>
          <option className="select_item" value="9">
            9
          </option>
          <option className="select_item" value="10">
            10
          </option>
        </select>
        <button className="w-[25vh] h-[5vh] border-[#202020] rounded-[5px] border text-white flex items-center gap-5 cursor-pointer ml-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="#21a2f8c5"
            width="3vh"
            height="3vh"
            className="shrink-0 ml-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>

          <span className="flex items-center justify-center font_for_button">
            Reset Filter
          </span>
        </button>
      </form>
      <div className="grid md:grid-cols-3 xl:grid-cols-5 lg:p-5 grid-cols-1 gap-5 p-12">
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
    </div>
  );
}
