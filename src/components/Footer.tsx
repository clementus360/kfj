import Image from "next/image";
import Logo from "../../public/wivcolor.svg"

import facebook from "../../public/icons/icons8-facebook.svg"
import instagram from "../../public/icons/icons8-instagram.svg"
import linkedin from "../../public/icons/icons8-linkedin.svg"
import twitter from "../../public/icons/icons8-twitter.svg"
import youtube from "../../public/icons/icons8-youtube.svg"
import flickr from "../../public/icons/icons8-flickr.svg"

export function Footer() {
	return(
	  <footer className='relative z-50 flex flex-col gap-4 w-full justify-between py-8 px-8 sm:px-12 text-black bg-primary'>
		<div className='flex flex-col gap-8 sm:gap-0 sm:flex-row justify-between items-center w-full py-4 border-accent border-b-2'>
		  <Image className="w-20" src={Logo} width={50} alt={"logo"} />
		  <ul className="flex gap-4">
			{/* <a href="" target="_blank"><li className="w-10 h-10 p-2 rounded-lg border-[0.1rem] border-black"><Image src={facebook} width={'50%'}></Image></li></a>
			<a href="" target="_blank"><li className="w-10 h-10 p-2 rounded-lg border-[0.1rem] border-black"><Image src={twitter} width={'50%'}></Image></li></a>		 */}
			<a href="/" target="_blank"><li className="w-10 h-10 p-2 rounded-lg border-[0.1rem] border-black"><Image src={youtube} width={50} alt={""}></Image></li></a>
			{/* <a href="" target="_blank"><li className="w-10 h-10 p-2 rounded-lg border-[0.1rem] border-black"><Image src={linkedin} width={'50%'}></Image></li></a>			 */}
			<a href="/" target="_blank"><li className="w-10 h-10 p-2 rounded-lg border-[0.1rem] border-black"><Image src={instagram} width={50} alt={""}></Image></li></a>
			<a href="/" target="_blank"><li className="w-10 h-10 p-2 rounded-lg border-[0.1rem] border-black"><Image src={flickr} width={50} alt={""}></Image></li></a>
		  </ul>
		</div>
		<div>
		  <ul className='flex gap-8 font-LogikBold text-2xl text-center sm:text-left'>
			<li>Privacy Policy</li>
			<li>Terms and conditions</li>
		  </ul>
		</div>
		<div className='flex justify-center w-full text-center sm:text-left'>
		  <p className='text-sm font-LogikWide'>© All rights reserved – Willy Investment Group</p>
		</div>
	  </footer>
	)
  }