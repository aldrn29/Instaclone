import { useRef } from "react";
import Image from "next/image";
import styled from "styled-components";
import Content from "./Content";
import Card from "./Card";
import Up from "../public/images/up.png";

const Index = () => {
    const ref = useRef<HTMLInputElement>();
    
    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Wrapper ref={ref}>
            <Card />
            <Card />
            <Card />
            <ScrollButton onClick={handleScroll}>
                <Image src={Up} alt="up" width={30} height={30} />
            </ScrollButton>
        </Wrapper>
    )
}

export default Index

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    position: relative;
`;

const ScrollButton = styled.div`
    position: fixed;
    right: 10px;
    bottom: 60px;
    background-color: white;
    border-radius: 50%;
`;