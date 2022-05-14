function Header() {
  return (
    <div className="mx-60">
      <div className="flex justify-between w-full content-center h-16 items-center">
        <h1 className="text-xl font-bold">Voyage Notes</h1>
        <button className="text-lg bg-transparent hover:bg-color-secondary text-blue-400 font-bold hover:text-white py-1 px-5 border-2 hover:border-transparent rounded">
          Log in
        </button>
      </div>
      <div className="flex w-full content-center h-12">
        <button className="mb-0 mt-auto text-md bg-blue-100 hover:bg-color-secondary text-blue-400 font-bold hover:text-white w-20 h-8 mr-4 hover:border-transparent">
          About
        </button>
        <button className="mb-0 mt-auto text-md bg-blue-100 hover:bg-color-secondary text-blue-400 font-bold hover:text-white w-20 h-8 hover:border-transparent">
          Diary
        </button>
      </div>
    </div>
  );
}

export default Header;
