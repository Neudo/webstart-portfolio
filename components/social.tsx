import {FC} from "react";
import linkedin from "assets/img/svg/mdi_linkedin.svg"
import github from "assets/img/svg/mdi_github.svg"
import instagram from "assets/img/svg/mdi_instagram.svg"




const SocialComponent: FC = () =>
    (
       <ul className="md:ml-5 fixed md:left-0 md:bottom-20 md:bg-transparent md:block md:p-0 md:w-auto bottom-0 flex justify-evenly bg-darkBlue-0 py-6 px-10 w-full    after:content-[''] after:absolute after:left-[12px] after:bottom-[-110px] after:w-[1px] after:h-20 after:bg-[#6B98BF]  ">
           <li className="md:mb-2"><a href="#"><img className="brightness-0 invert" src={linkedin.src} alt=""/></a></li>
           <li className="md:mb-2"><a href="#"><img className="brightness-0 invert" src={github.src} alt=""/></a></li>
           <li><a href="#"><img className="brightness-0 invert" src={instagram.src} alt=""/></a></li>
       </ul>
    )

export default SocialComponent