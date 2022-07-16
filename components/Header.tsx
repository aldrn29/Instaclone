import Link from "next/link";
import Image from "next/image";
import Add from "../public/images/add.png";
import Heart from "../public/images/heart.png";
import Send from "../public/images/send.png";

const Header = () => {
    return (
        <div>
            <Link href="/">
                <span>Instagram</span>
            </Link>
            <Image src={Add} alt="logo" width={30} height={30} />
            <Image src={Heart} alt="logo" width={30} height={30} />
            <Image src={Send} alt="logo" width={30} height={30} />
        </div>
    )
}

export default Header;