import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>terminal.Ch3tanbug.sec</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
