import { Link } from "react-router";
import { Flist } from "../../public/favoritDB";

export default function Favorit() {
  return (
    <div className="pt-20 pl-5">
      <div className="flex flex-col gap-5">
        <span className="text-5xl font-bold text-white">My Favorites</span>
        <span className="text-gray-300">
          Your personal collection of movies love watching. <br />
          {Flist.length} movies saved
        </span>
      </div>
      <div className="p-5 grid grid-cols-4 gap-5">
        {Flist.map((i, index) => {
          return (
            <Link
              to={`/Movie/${i.id}`}
              key={index}
              className="relative w-[40vh] h-[40vh] hero-hover cursor-pointer rounded-lg border border-[#202020] overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${i.img})` }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="red"
                className="absolute top-2 right-2 size-6"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>

              <div className="bg-linear-to-t from-black/70 to-transparent h-full w-full flex flex-col justify-end text-center">
                <span className="block truncate px-2 text-white font-semibold text-2xl">
                  {i.name}
                </span>
                <span className="flex items-center justify-center text-gray-300 gap-1 pr-3 px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#21a2f8c5"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {i.point}/10
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
