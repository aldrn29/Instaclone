import Image from "next/image";
import styled from "styled-components";
import DefalutProfile from "../public/images/default.png";
import Heart from "../public/images/heart.png";
import Chat from "../public/images/chat.png";
import Send from "../public/images/send.png";
import Mark from "../public/images/mark.png";

const Card = () => {

    return (
        <Wrapper>
            <CardView>
                <CardTop>
                    <Image src={DefalutProfile} alt="default" width={30} height={30} />
                    <div>aldrn</div>
                </CardTop>
                <CardMiddld>
                    image
                </CardMiddld>
                <CardBottom>
                    <ImageGroup>
                        <Image src={Heart} alt="heart" width={30} height={30} />
                        <Image src={Chat} alt="chat" width={30} height={30} />
                        <Image src={Send} alt="send" width={30} height={30} />
                    </ImageGroup>
                    <Image style={{marginLeft: "auto"}} src={Mark} alt="mark" width={30} height={30}/>
                </CardBottom>
            </CardView>
            <Contents>
                
            </Contents>
        </Wrapper>
    )
}

export default Card;

const Wrapper = styled.div`
    width: 100%;
    height: auto;
`;

const CardView = styled.div`
    display: grid;
    grid-template-rows: 1fr 9fr;
`;

const CardTop = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    font-weight: bold;
    padding-left: 10px;

    & > div {
        margin-left: 10px;
    }
`;

const CardMiddld = styled.div`
    background-color: gray;
`;

const CardBottom = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    align-items: center;
`;

const ImageGroup = styled.div`
    width: 110px;
    display: flex;
    justify-content: space-between;
`;

const Contents = styled.div`

`;
