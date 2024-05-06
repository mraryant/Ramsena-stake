 
import logo from "../assets/icons/logo.webp"
const Navbar = () => {
  return (
      <>
          <div className="flex flex-wrap pt-5 px-5 justify-between items-center " >
              <div>
                  <img loading="lazy" src={logo} alt="" />
              </div>
              
              <div>
                  <a href="" className=" bg-white w-fit text-black px-4 py-2  rounded-3xl " > stake now ➜ </a>

              </div>
              
          </div>
      </>
  )
}

export default Navbar