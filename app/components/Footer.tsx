import Link from "next/link"

export default function Footer()  {
    return (
      <div className="flex flex-col min-h-screen  ">
        <main className="flex-grow">
          
        
        </main>
        
        <footer className='bg-black  text-white  py-8 text-center   ' >&copy;Shopinghub
  
        <ul className="flex gap-4 justify-center font-bold">
          
        <Link href="https://www.linkedin.com/in/imran-hassan-723b841b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">linkedln</Link>
            <Link href="https://www.instagram.com/ihassankhan71?igsh=MTdxcmNldXNxeDlrNA==">Instagram</Link>
            <Link href="https://github.com/Imran-has">github</Link>
        </ul>
      
        </footer>
         
        
        
         
      </div>
    )
  }
  
  
  
  
  