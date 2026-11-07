export default function Loading() {
  return (
    <div className="inset-0 fixed z-101">
      <div className="flex items-center justify-center mt-[33dvh] gap-4">
        <span className="object-cover">
          <img className="w-[15vh] h-[15vh]" src="/favicon.png" />
        </span>
        <div className="text-white text-7xl font-bold">
          <span className="Loading"  style={{ animationDelay: "0.2s" }}>C</span>
          <span className="Loading" style={{ animationDelay: "0.3s" }}>
            i
          </span>
          <span className="Loading" style={{ animationDelay: "0.4s" }}>
            n
          </span>
          <span
            className="text-[#21a2f8c5] Loading"
            style={{ animationDelay: "0.5s" }}
          >
            S
          </span>
          <span
            className="text-[#21a2f8c5] Loading"
            style={{ animationDelay: "0.6s" }}
          >
            e
          </span>
          <span
            className="text-[#21a2f8c5] Loading"
            style={{ animationDelay: "0.7s" }}
          >
            e
          </span>
          <span
            className="text-[#21a2f8c5] Loading"
            style={{ animationDelay: "0.8s" }}
          >
            n
          </span>
        </div>
      </div>
      <div className="flex items-center relative justify-center pt-10">
      </div>
    </div>
  );
}
