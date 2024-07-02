import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Chetan Kashyap</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a Security Engineer</HighlightAlt> based in Punjab,
        India.
      </p>
      <p>
        I am passionate about identifying security issues and communicating them effectively in order to prevent any external exploitation.<br />
      </p>
    </AboutWrapper>
  );
};

export default About;
