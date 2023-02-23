import {FC} from "react";
import linkedin from "assets/img/svg/mdi_linkedin.svg"
import github from "assets/img/svg/mdi_github.svg"
import instagram from "assets/img/svg/mdi_instagram.svg"




const SocialComponent: FC = () =>
    (
       <ul className="ml-5 fixed left-0 bottom-20   after:content-[''] after:absolute after:left-[12px] after:bottom-[-110px] after:w-[1px] after:h-20 after:bg-[#6B98BF]  ">
           <li className="mb-2"><a href="#"><img src={linkedin.src} alt=""/></a></li>
           <li className="mb-2"><a href="#"><img src={github.src} alt=""/></a></li>
           <li><a href="#"><img src={instagram.src} alt=""/></a></li>
       </ul>
    )

export default SocialComponent