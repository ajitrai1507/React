function Navabar() {
  return (
    <>
      <div className=" text-white bg-zinc-600 mb-3 flex justify-between items-center p-2">
        <div className="logo">
          <h1 className="text-2xl cursor-pointer rotate-45 bg-red-500 rounded-md px-2 py-3">
            Ajit Rai
          </h1>
        </div>

        <div className="Navbar flex list-none justify-end gap-5 text-xl cursor-pointer p-5 text-yellow-500">
          <li>Home</li>
          <li>About</li>
          <li>Section</li>
          <li>Contact Us</li>
          <li>Touch Us</li>
        </div>
      </div>


    </>
  );
}

export default Navabar;
