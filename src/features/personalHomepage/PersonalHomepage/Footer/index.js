import { email } from "../email.js"
import { SocialIcons } from "./SocialIcons";
import { Wrapper, LetsTalk, Address, EmailWrapper, EmailLink, Paragraph } from "./styled";


export const Footer = () => (
    <Wrapper>
        <LetsTalk>Let's Talk</LetsTalk>
        <Address>
            <EmailWrapper>
                <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
            </EmailWrapper>
            <Paragraph>
                Thank you for viewing my personal homepage. I'm very excited to talk about new opportunities ahead.
            </Paragraph>
            <SocialIcons />
        </Address>
    </Wrapper>

);