import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`                                                                                                                                                                    
 ######  ##   ##  ######    ######   #####    #####    #####   ##   ##   #####   
##       ##   ##       ##     ##    ##   ##  ##   ##  ##   ##  ##   ##  ##       
##       ## ####   #####      ##    ## ####  ##   ##  ## ###   ##   ##  ##  ###  
##       ##   ##       ##     ##    ##   ##  ##   ##  ##   ##  ##   ##  ##   ##  
 ######  ##   ##  ######      ##    ##   ##  ##   ##  ## ###    #####    #####                                                                               
`}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`                                                                          
 ######  ##   ##  ######    ######   #####    #####    #####   ##   ##   #####   
##       ##   ##       ##     ##    ##   ##  ##   ##  ##   ##  ##   ##  ##       
##       ## ####   #####      ##    ## ####  ##   ##  ## ###   ##   ##  ##  ###  
##       ##   ##       ##     ##    ##   ##  ##   ##  ##   ##  ##   ##  ##   ##  
 ######  ##   ##  ######      ##    ##   ##  ##   ##  ## ###    #####    #####   
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.3.1)</div>
        <Seperator>----</Seperator>
        <div>
          Check Out My Blog Website, It Mainly Contains Writeups, <br></br>
          My Findings And Notes On Various Topics On <br></br>
          Information Technology And Security <br></br> Here {" "}
          <Link href="https://ch3tanbugportfolio-1jwb4lsy7-ch3tanbugs-projects.vercel.app/blog">
            Ch3tanbug Blog
          </Link>
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
        <Seperator>----</Seperator>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
▒▒▒░░░░░░░░░░▄▐░░░░
▒░░░░░░▄▄▄░░▄██▄░░░
░░░░░░▐▀█▀▌░░░░▀█▄░
░░░░░░▐█▄█▌░░░░░░▀█▄
░░░░░░░▀▄▀░░░▄▄▄▄▄▀▀
░░░░░▄▄▄██▀▀▀▀░░░░░
░░░░█▀▄▄▄█░▀▀░░░░░░
░░░░▌░▄▄▄▐▌▀▀▀░░░░░
░▄░▐░░░▄▄░█░▀▀░░░░░
░▀█▌░░░▄░▀█▀░▀░░░░░
░░░░░░░░▄▄▐▌▄▄░░░░░
░░░░░░░░▀███▀█░▄░░░
░░░░░░░▐▌▀▄▀▄▀▐▄░░░
░░░░░░░▐▀░░░░░░▐▌░░
░░░░░░░█░░░░░░░░█░░
░░░░░░▐▌░░░░░░░░░█░

`}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
