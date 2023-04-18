import { MainInformation } from "./MainInformation";
import { Container } from "./styled";
import { Footer } from "./Footer";
import { ThemeSwitch } from "../../../common/ThemeSwitch";


export const PersonalHomepage = () => (
    <Container>
        <ThemeSwitch />
        <MainInformation />
        <Footer />
    </Container>
);