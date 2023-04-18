import { MainInformation } from "./MainInformation";
import { Container } from "./styled";
import { Portfolio } from "./Portfolio";
import { Footer } from "./Footer";
import { ThemeSwitch } from "../../../common/ThemeSwitch";


export const PersonalHomepage = () => (
    <Container>
        <ThemeSwitch />
        <MainInformation />
        <main>
            <Portfolio />
        </main>
        <Footer />
    </Container>
);