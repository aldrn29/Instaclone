import Image from "next/image";
import Home from "../public/images/home.png";
import Magnifier from "../public/images/magnifier.png";
import Video from "../public/images/video.png";
import Chat from "../public/images/chat.png";
import styled from "styled-components";

const Footer = () => {
    return (
        <Wrapper>
            <Image src={Home} alt="logo" width={30} height={30} />
            <Image src={Magnifier} alt="logo" width={30} height={30} />
            <Image src={Video} alt="logo" width={30} height={30} />
            <Image src={Chat} alt="logo" width={30} height={30} />
        </Wrapper>
    )
}

export default Footer;

const Wrapper = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;