import Image from "next/image";

const thumbs = [
  "/sva-avater-1.png",
  "/images/hero/thumb-2.jpg",
  "/images/hero/thumb-3.jpg",
];

export default function HeroBottomNavigation() {
  return (
    <div className="hero-nav">
      <button className="nav-btn">←</button>

      <div className="flex -space-x-2">
        <img
          src="/avatar-1.jpg"
          alt=""
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <img
          src="/avatar-2.jpg"
          alt=""
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <img
          src="/avatar-3.jpg"
          alt=""
          className="w-10 h-10 rounded-full border-2 border-white"
        />
      </div>

      <button className="nav-btn">→</button>

      <span className="corner-top-left" />
      <span className="corner-top-right" />
      <span className="corner-bottom-left" />
      <span className="corner-bottom-right" />
    </div>
  );
}
