const colorNames = {
    salem: "#0B7A50",
    mercury: "#E5E5E5",
    white: "#FFFFFF",
    mineShaft: "#252525",
    slateGray: "#6E7E91",
    mountainMeadow: "#12D98F",
    chinook: "#A1E2B8",
    ironTransparent: "rgba(209, 213, 218, 0.3)",
    whiteLilac: "#FBFBFE",
    porcelain: "#F2F3F4",
    doveGray: "#6D6D6D",
    tundora: "#414141",
    mineShaftLighter: "#313131",
    cornflowerBlue: "#5990E4",
    halfBaked: "#88B6CD",
    bostonBlue: "#429FB3",
};

const common = {
    breakpoints: {
        mobileMax: 767,
        tabletVerticalMax: 991,
        tabletHorizontalMax: 1199,
    },
    boxShadow: "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)",
    borderRadiusSmall: "4px",
};

export const themeLight = {
    ...common,
    colors: {
        primary: colorNames.salem,
        textPrimary: colorNames.mineShaft,
        site: {
            background: colorNames.whiteLilac,
            text: colorNames.slateGray,
        },
        buttonLink: {
            text: colorNames.white,
            border: colorNames.ironTransparent,
            shadow: colorNames.mountainMeadow,
        },
        boxBackground: colorNames.white,
        headerLine: colorNames.mercury,
        tile: {
            border: colorNames.porcelain,
            borderHover: colorNames.chinook,
            header: colorNames.niagara,
        },
        themeSwitch: {
            background: colorNames.mercury,
            icon: colorNames.white,
        },
    },
};

export const themeDark = {
    ...common,
    colors: {
        primary: colorNames.cornflowerBlue,
        textPrimary: colorNames.white,
        site: {
            background: colorNames.mineShaft,
            text: colorNames.white,
        },
        buttonLink: {
            text: colorNames.white,
            border: colorNames.ironTransparent,
            shadow: colorNames.halfBaked,
        },
        boxBackground: colorNames.mineShaftLighter,
        headerLine: colorNames.tundora,
        tile: {
            border: colorNames.tundora,
            borderHover: colorNames.bostonBlue,
            header: colorNames.white,
        },
        themeSwitch: {
            background: colorNames.doveGray,
            icon: colorNames.mineShaft,
        },
    },
};