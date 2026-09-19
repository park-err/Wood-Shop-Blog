import ShopTalkLogo from "../assets/ShopTalkLogo";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 border-1 border-(--accent)">
      <ShopTalkLogo size={100} fill={"orange"} />
      <nav className="flex gap-8 items-center">
        <a href="#" className="text-(--text) hover:text-(--accent)">
          Home
        </a>
        <a href="#" className="text-(--text) hover:text-(--accent)">
          About
        </a>
        <a href="#" className="text-(--text) hover:text-(--accent)">
          Blog
        </a>
      </nav>
      <button className="bg-(--primary) text-(--text) px-4 py-2 rounded">
        Sign Up
      </button>
    </header>
  );
}
