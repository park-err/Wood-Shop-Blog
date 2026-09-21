import ShopTalkLogo from "../assets/ShopTalkLogo";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white h-30 w-screen z-100">
      <ShopTalkLogo size={100} fill={"#E28413"} text={"#646E78"} />
      <nav className="flex gap-8 items-center">
        <a href="/" className="text-(--text) hover:text-(--accent)">
          Home
        </a>
        <a href="#" className="text-(--text) hover:text-(--accent)">
          About
        </a>
        <a href="#" className="text-(--text) hover:text-(--accent)">
          Blog
        </a>
      </nav>
      <button className="btn-primary">Sign Up</button>
    </header>
  );
}
