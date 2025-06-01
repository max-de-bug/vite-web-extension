import logo from "@assets/img/logo.svg";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center text-white">
      <img
        src={logo}
        className="h-36 pointer-events-none animate-spin-slow"
        alt="logo"
      />
      <p></p>
      <a
        className="text-blue-400"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React!
      </a>
      <p>Popup styled with TailwindCSS!</p>
    </header>
  );
};

export default Header;
