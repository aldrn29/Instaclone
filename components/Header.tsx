import Link from "next/link";
import Image from "next/image";
import Down from "../public/images/down.png";
import Add from "../public/images/add.png";
import Heart from "../public/images/heart.png";
import Send from "../public/images/send.png";
import styled from "styled-components";

const Header = () => {
    return (
        <Wrapper>
            <Link href="/">
                <LogoText>Instagram</LogoText>
            </Link>
            <Image src={Down} alt="down" width={15} height={15} />
            <ImageWrapper>
                <Image src={Add} alt="add" width={30} height={30} />
                <Image src={Heart} alt="heart" width={30} height={30} />
                <Image src={Send} alt="send" width={30} height={30} />
            </ImageWrapper>
        </Wrapper>
    )
}

export default Header;

const Wrapper = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    display: flex;
    align-items: center;
    padding: 0 20px;
`;

const ImageWrapper = styled.div`
    width: 130px;
    margin-left: auto; 
    display: flex;
    justify-content: space-between;
`;

const LogoText = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    margin-right: 5px;
`;