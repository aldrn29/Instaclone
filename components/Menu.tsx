import Image from "next/image";
import Home from "../public/images/home.png";
import Magnifier from "../public/images/magnifier.png";
import Video from "../public/images/video.png";
import Bag from "../public/images/bag.png";
import DefalutProfile from "../public/images/default.png";
import styled from "styled-components";

const Menu = () => {
    return (
        <Wrapper>
            <Image src={Home} alt="logo" width={30} height={30} />
            <Image src={Magnifier} alt="magnifier" width={30} height={30} />
            <Image src={Video} alt="video" width={30} height={30} />
            <Image src={Bag} alt="chat" width={30} height={30} />
            <Image src={DefalutProfile} alt="default" width={30} height={30} />
        </Wrapper>
    )
}

export default Menu;

const Wrapper = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;