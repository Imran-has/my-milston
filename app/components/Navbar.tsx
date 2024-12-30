import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className="container  bg-yellow-400 md:w-full p-6">
      <div className="font-bold text-2xl pt-6 mr-3">MobileShoping</div>
        <ul className="flex justify-center items-center gap-4 font-semibold text-2xl text-center text-white">
           <Link href={"/"}><li>Home</li></Link> 
            <Link href={"/About"}><li>About </li></Link>
            <Link href={"/Contact"}><li>Contact</li></Link>
            <Link href={"/Features"}><li>Features</li></Link>

             <li>
             <input 
        type="text"
        placeholder='What are you looking for?'
        className='p-2 rounded-lg text-white-900 w-[300px] h-[38px]'
       
        />
             </li>
             
             <li className="ml-7 text-white text-[30px]"><CiHeart /></li>
             <li className=" text-white text-[30px]"><CiShoppingCart /></li>
          
        </ul>
       
        <div>
        
  </div>    
         
      
    </div>
  )
}

export default Navbar
