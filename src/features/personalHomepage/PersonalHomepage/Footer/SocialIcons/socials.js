import { styleIcon } from "./styled";
import {ReactComponent as GithubIcon } from "./icons/github.svg";
import {ReactComponent as LinkedInIcon } from "./icons/linkedin.svg";
import {ReactComponent as FacebookIcon } from "./icons/facebook.svg";

export const socials = [
    {
        name: "GitHub",
        url: "https://github.com/AgaNowacka",
        Icon: styleIcon(GithubIcon),
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/agnieszka-nowacka-823525272/",
        Icon: styleIcon(LinkedInIcon),
    },
    {
        name: "Faceobook",
        url: "https://www.facebook.com/agnieszka.w.nowacka/",
        Icon: styleIcon(FacebookIcon),
    },
]