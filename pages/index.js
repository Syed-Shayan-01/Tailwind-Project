import Link from "next/link";
import List from "./components/List/List";
import Button from "./components/button/Button";
import Image from "next/image";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center bg-black text-white py-4 sm: flex-wrap max-[440px]: ">
        <h1 className="text-2xl font-bold ml-14 max-sm:m-auto">Shayan(dev)</h1>
        <nav className=" max-sm:m-auto flex-wrap">
          <ul className="flex space-x-9 mr-14 items-center text-sm max-sm:m-auto">
            <Link href="#" className="hover:text-gray-200 duration-200"><List text="Home" /></Link>
            <Link href="#" className="hover:text-gray-200 duration-200" ><List text="Contact" /></Link>
            <Link href="#" className="hover:text-gray-200 duration-200"><List text="About" /></Link>
            <Link href="#" className="hover:text-gray-200 duration-200"><List text="Projects" /></Link>
            <Button>login</Button>
          </ul>

        </nav>
      </header>

      <section className="flex justify-around items-center mt-24 mr-10 max-[1000px]: flex-wrap-reverse ">
        <div className="left ml-14 max-[550]:ml-8 mb-7 ">
          <h2 className="font-bold text-4xl max-sm:text-center">
            Syed Shayan
          </h2>
          <div className="w-96 text-sm mt-4 max-sm:w-4/12 m-auto ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Error dolorem quaerat consequuntur magni eos iste fuga et
            deleniti facilis quas, sed nihil reprehenderit.
          </div>
          <div className="text-yellow space-x-5 ml-7 mt-3 max-[450]: flex-wrap">
            <Button>Upload Cv</Button>
            <Button>Download Cv</Button>
          </div>
        </div>
        <div className="right max-sm: ml-8 mb-7">
          <Image src="/pic.png" width={620} height={1000}></Image>
        </div>
      </section>

      <section>
        {/**************************  Main Heading *****************************/}
        <h1 className=" font-bold text-3xl text-center mt-20">
          Skills Expertiece
        </h1>

        {/**************************  All Cards Main Div *****************************/}

        <div className="flex justify-around items-center mt-24 max-md:flex-wrap max-sm:w-auto max-sm:p-5">

          {/*********************  1st skill introduction ***************************/}
          <div className="max-w-xs rounded-xl overflow-hidden shadow-xl duration-300 hover:scale-105 max-sm:m-5">
            <Image src="/Html.jpeg" className="w-[331px]" width={250} height={100}></Image>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">HTML || Css || Javascript</div>
              <Link className="text-gray-700 text-sm  hover:text-black" href="">Some example text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorum quibusdam cupiditate, ea est libero voluptatum aut dolorem illo.</Link>
            </div>
          </div>

          {/********************* 2nd skill introduction *******************/}
          <div className="max-w-xs rounded-xl overflow-hidden shadow-xl duration-300 hover:scale-105 max-sm:m-5">
            <Image src="/new.jpeg" className="w-[331px]" alt="My Image" width={250} height={100}></Image>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Reactjs || Nextjs</div>
              <Link className="text-gray-700 text-sm  hover:text-black" href="">Some example text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorum quibusdam cupiditate, ea est libero voluptatum aut dolorem illo.</Link>
            </div>
          </div>

          {/******************** 3rd skill introduction ********************/}
          <div className="max-w-xs rounded-xl overflow-hidden shadow-xl duration-300 hover:scale-105 max-sm:m-5">
            <Image src="/new-1.jpeg" className="w-[331px]" alt="My Image" width={250} height={100}></Image >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Tailwind Css || Bootstrap</div>
              <Link className="text-gray-700 text-sm hover:text-black" href="">Some example text. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Autem dolorum quibusdam cupiditate, ea est libero voluptatum aut
                dolorem illo.</Link>
            </div>
          </div>
        </div>
      </section>
      {/* Start Line  */}
      <div className=" w-full border-b-2 mt-24 border-black"></div>
      {/* End Line */}

      <section>
        <h1 className="text-center mt-20 font-bold text-3xl">
          Social Media Accounts
        </h1>
        <ul className=" bg-black text-white  text-sm text-center">
          {/* Whats App Link */}
          <div className="my-10 pt-5  duration-700 hover:text-gray-500">
            <Link href=""><List text="what'sapp" /></Link>
          </div>
          {/* Fb Link */}
          <div className="mt-10  duration-700 hover:text-gray-500">
            <Link href="https://www.facebook.com/battlewar.gaming.9"><List text="Facebook" /></Link>
          </div>
          {/* Insta Link */}
          <div className="mt-10 duration-700 hover:text-gray-500">
            <Link href="https://www.instagram.com/syed_m_shayan/"><List text="Instagram" /></Link>
          </div >
          {/* LinkedIn Link */}
          <div className="mt-10  duration-700 hover:text-gray-500">
            <Link href="https://www.linkedin.com/in/thesyedshayan/"><List text="LinkedIn" /></Link>
          </div>
          {/* GitHub Link */}
          <div className="mt-10 pb-5 duration-700  hover:text-gray-500">
            <Link href="https://github.com/Syed-Shayan-01"><List text="GitHub" /></Link>
          </div>

        </ul>

      </section>

      <footer className=" flex justify-around items-center my-20 max-md:flex-col">
        <div className=" text-3xl font-bold max-md:mb-4">
         <Link href="/">Syed Shayan</Link>
        </div>
        <div className="text-sm max-md:mt-4">
          Shayan 2023 all right reserved
        </div>
        <ul className="flex space-x-8 text-xl max-md:mt-4">
          <Link href="https://www.instagram.com/syed_m_shayan/"><List text={<BsInstagram />} /></Link>
          <Link href="https://www.facebook.com/battlewar.gaming.9"><List text={<BsFacebook />} /></Link>
          <Link href="https://github.com/Syed-Shayan-01"><List text={<BsGithub />} /></Link>
          <Link href="https://www.linkedin.com/in/thesyedshayan/"><List text={<BsLinkedin />} /></Link>
        </ul>
      </footer>
    </>
  )
}
