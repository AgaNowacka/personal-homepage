import { StyledHeader, Item, List, Section, Bullet } from "./styled";

export const Skills = ({ title, skills }) => (
    <Section>
        <StyledHeader>{title}</StyledHeader>
        <List>
            {skills.map(skill => (
                <Item key={skill}>
                    <Bullet />
                </Item>
            ))}
        </List>
    </Section>
);
