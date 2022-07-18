import Link from "next/link";
import Image from "next/image";
import Add from "../public/images/add.png";
import Heart from "../public/images/heart.png";
import Send from "../public/images/send.png";
import styled from "styled-components";

const Header = () => {
    return (
        <Wrapper>
            <Link href="/">
                <span>Instagram</span>
            </Link>
            <ImageWrapper>
                <Image src={Add} alt="logo" width={30} height={30} />
                <Image src={Heart} alt="logo" width={30} height={30} />
                <Image src={Send} alt="logo" width={30} height={30} />
            </ImageWrapper>
        </Wrapper>
    )
}

export default Header;

const Wrapper = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    position: absolute;
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