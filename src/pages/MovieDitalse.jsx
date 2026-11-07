import { Link, useParams } from "react-router";
import { items } from "../../public/hugeDB";
import { Flist } from "../../public/favoritDB";
import { useState } from "react";

export default function MovieDitalse() {
  const { id } = useParams();
  const el = items.find((i) => String(i.id) === id);
  const [like, setLike] = useState(false);
  const simItem = [
    {
      id: 14,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsGRbXsVc51kEq3KnQcOmBLTOCUryoljcHtWnqgsHUeg&s=10",
      name: "Parasite",
      date: 2019,
      point: 8.5,
      ganre: "Thriller",
      age: "18+",
      duration: 132,
      description:
        "A poor family cons its way into working for a wealthy household, until a hidden secret threatens to unravel everything.",
    },
    {
      id: 15,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTbwB5zd0E--gDVGFgc0fys0I56ITel6y2z1L4F6XaNQ&s=10",
      name: "Gladiator",
      date: 2000,
      point: 8.5,
      ganre: "Action",
      age: "18+",
      duration: 155,
      description:
        "A betrayed Roman general is forced into slavery and fights as a gladiator, seeking revenge on the corrupt emperor who destroyed his family.",
    },
    {
      id: 16,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUOanv0oNlV01Ew64DUsohXGf7k4ioYihQz0mMDxJGFQ&s=10",
      name: "The Conjuring",
      date: 2013,
      point: 7.5,
      ganre: "Horror",
      age: "18+",
      duration: 112,
      description:
        "Paranormal investigators Ed and Lorraine Warren help a family terrorized by a dark presence in their secluded farmhouse.",
    },
    {
      id: 17,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIKSxQJ25vNm3vOTD8ZNOskS-hvIaHqCnH0VdB7nbH4Q&s=10",
      name: "Top Gun: Maverick",
      date: 2022,
      point: 8.2,
      ganre: "Action",
      age: "13+",
      duration: 130,
      description:
        "After more than thirty years of service, Maverick returns to train a new generation of elite pilots for a dangerous mission that tests him and the past he can't leave behind.",
    }
  ];
  const artist = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkvhrVtqViiGEnva2fcMbtC4qboIIfNztJwD7hf0VNnQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEjyFy_-M8S5sq9VmM4-7Y67RPmZT-CQ67ppoXIImFkA&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSORw4dpbRWIeXbffKTI_vRsrm-yUTeg8UPB2GOiNrcfw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hi01GbsGG1Pp_rFrrHpyF0uohuWD32fqUWLbampQpw&s=10",
  ];
  const add_Flist = () => {
    if (Flist.includes(el)) {
      let i = Flist.indexOf(el);
      Flist.splice(i, 1);
      setLike(true);
    } else {
      Flist.unshift(el);
      setLike(false);
      console.log(Flist);
    }
  };
  const [comment, setComment] = useState([
    {
      name: "mohammad",
      prof: "/profile.jpg",
      comment: "عالی بود من حسابی خوشم امد",
    },
    { name: "ali", prof: "/profile.jpg", comment: "خوب نبود" },
    { name: "mohammad", prof: "/profile.jpg", comment: "با داستانش حال نکردم" },
  ]);
  const [com, setCom] = useState("");

  return (
    <div className="pt-20">
      <div className="w-full min-h-[50dvh] relative overflow-hidden bg-black text-gray-300">
        <div
          className="blur-2xl absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 scale-120"
          style={{ backgroundImage: `url(${el.img})` }}
        />

        <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent" />

        <div className="relative h-full flex items-center justify-between gap-8 px-10 cursor-default">
          <div className="max-w-xl self-start pt-10">
            <h1 className="text-5xl font-bold uppercase text-white">
              {el.name}
            </h1>
            <div className="pt-5 flex items-center gap-2">
              <span className="flex items-center gap-2 text-[#21a2f8c5]">
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
                {el.point}/10
              </span>
              <span className="dat_style"></span>
              <span>{el.date}</span>
              <span className="dat_style"></span>
              <span className="text-gray-300">{el.duration} min</span>
              <span className="dat_style"></span>
              <span>{el.ganre}</span>
              {el.episodes && (
                <span className="flex gap-2 items-center justify-center">
                  <span className="dat_style"></span>
                  {el.episodes}
                </span>
              )}
              <span className="border border-[#21a2f8c5] text-[#21a2f8c5] p-0.5 rounded-md ml-3">
                {el.age}
              </span>
            </div>
            <p className="pt-5">{el.description}</p>
            <div className="flex gap-3 pt-10">
              <button className="flex justify-center items-center gap-2 hero-hover bg-[#21a2f8c5] rounded-md p-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                    clip-rule="evenodd"
                  />
                </svg>
                Watch Trailer
              </button>
              <button
                onClick={add_Flist}
                className={`flex justify-center hero-hover items-center gap-2 border rounded-md p-2 cursor-pointer ${like ? "border-[#21a2f8c5] text-[#21a2f8c5]" : "border-gray-300"}`}
              >
                {like ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#21a2f8c5"
                    class="size-6"
                  >
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                )}
                Add To Favorite
              </button>
            </div>
          </div>

          <img
            src={el.img}
            alt={el.name}
            className="h-[60vh] py-5  rounded-lg shadow-2xl"
          />
        </div>
      </div>

      <div className="flex gap-8 mb-1">
        <div className="flex-1 min-w-0">
          <span className=" uppercase text-2xl text-white font-semibold flex justify-center items-center py-5">
            Artists
          </span>
          <div className="flex min-w-100 gap-6 pl-5">
            {artist.map((im, index) => {
              return (
                <div
                  key={index}
                  className=" rounded-full size-30 overflow-hidden hero-hover"
                >
                  <img
                    className="object-cover w-full h-full"
                    src={im}
                    alt={im}
                  />
                </div>
              );
            })}
          </div>

          <form className="flex items-center pl-4" action="#">
            <input
              type="text"
              placeholder="Add Comment"
              value={com}
              onChange={(e) => setCom(e.target.value)}
              className="h-15 w-[70vh] rounded-xl m-5 mr-3 text-white border border-[#202020] placeholder:flex placeholder:items-center pl-3 focus:border-[#21a2f8c5] focus:outline"
            />
            <button
              className="bg-[#21a2f8c5] h-15 w-15 rounded-xl text-white hero-hover cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                if (!com.trim()) return;
                setComment([
                  { name: "meraj", prof: "/profile.jpg", comment: com },
                  ...comment,
                ]);
                setCom("");
              }}
            >
              Send
            </button>
          </form>
          <div className="flex flex-col overflow-scroll min-h-40 max-h-[45dvh] w-[90dvh] scrollbar-none pl-8 pr-2.5 gap-3">
            {comment.map((c, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-2xl border border-[#202020] bg-white/3 text-gray-300 transition-colors"
              >
                <img
                  src={c.prof}
                  alt={c.name}
                  className="size-10 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-white">{c.name}</p>
                  <p
                    dir="auto"
                    className="mt-1 text-sm leading-relaxed text-gray-400 break-words"
                  >
                    {c.comment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="shrink-0">
          <span className="uppercase text-2xl text-white font-semibold flex justify-center items-center py-5">
            More Movie
          </span>
          <div className="flex pr-5 gap-6 mt-1">
            {simItem.map((i, index) => {
              return (
                <Link
              to={`/Movie/${i.id}`}
                  key={index}
                  className="hero-hover cursor-pointer w-[25dvh] h-[80dvh] flex flex-col overflow-hidden border border-[#202020] rounded-xl"
                >
                  <div className="bg-black h-[80%] w-full overflow-hidden">
                    <img
                      className="object-cover w-full h-full"
                      src={i.img}
                      alt={i.name}
                    />
                  </div>
                  <div className="bg-black h-[20%] w-full flex flex-col pt-2 justify-center items-center overflow-hidden">
                    <p className="text-white text-lg font-medium w-full px-2 text-center whitespace-nowrap truncate">
                      {i.name}
                    </p>
                    <span className="text-gray-300 flex gap-1 items-center">
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
                      {i.point}/10
                    </span>
                    <span className="my-1 card_ganre">
                      {i.ganre}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
