import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
    return (
        <Wrapper>
            <User>anonymous</User>@<WebsiteName>cx330.tw</WebsiteName>:~$
        </Wrapper>
    );
};

export default TermInfo;
