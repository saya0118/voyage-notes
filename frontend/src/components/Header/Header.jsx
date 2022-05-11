function Header() {
  return (
    <div className="mx-20">
      <div className="flex justify-between w-full content-center h-16 items-center">
        <h1 className="text-xl font-bold">Voyage Notes</h1>
        <ul className="flex">
          <li className="mr-10">
            <a className="font-semibold">Home</a>
          </li>
          <li className="mr-10">
            <a className="font-semibold">About</a>
          </li>
          <li className="mr-10">
            <a className="font-semibold">Diary</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
