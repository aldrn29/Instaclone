import Image from "next/image";
import Home from "../public/images/home.png";
import Magnifier from "../public/images/magnifier.png";
import Video from "../public/images/video.png";
import Chat from "../public/images/chat.png";

const Footer = () => {
    return (
        <div>
            <Image src={Home} alt="logo" width={30} height={30} />
            <Image src={Magnifier} alt="logo" width={30} height={30} />
            <Image src={Video} alt="logo" width={30} height={30} />
            <Image src={Chat} alt="logo" width={30} height={30} />
        </div>
    )
}

export default Footer