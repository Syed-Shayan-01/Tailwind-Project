
export default function Button({children}) {
    return (
      <>
      <button className=" bg-black rounded-md text-white p-2 border hover:bg-white hover:text-black " >
      {children}</button>
      </>
    )
  }
  