import ShopTalkLogo from "./assets/ShopTalkLogo";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 border-1 border-(--accent)">
      <ShopTalkLogo size={100} fill={"orange"} />
      <ul className="flex space-x-4 text-(--text)">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button className="bg-(--primary) text-(--text) px-4 py-2 rounded">
        Sign Up
      </button>
    </header>
  );
}
