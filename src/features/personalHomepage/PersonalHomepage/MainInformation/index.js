import agaNowackaProfile from "./aga.png";
import { Wrapper, Avatar, Im, Name, Summary, StyledButtonLink, ButtonIcon } from "./styled";
import { email } from "../email";

export const MainInformation = () => (
    <Wrapper>
        <Avatar src={agaNowackaProfile} alt="Agnieszka Nowacka" />
        <div>
            <Im>I'm</Im>
            <Name>Agnieszka Nowacka</Name>
            <Summary>
                I'm a Frontend Developer currently looking for new job opportunieties.
            </Summary>
            <StyledButtonLink href={`mailto:${email}`} title={email}>
                <ButtonIcon />
                Hire me
            </StyledButtonLink>
        </div>
    </Wrapper>
);