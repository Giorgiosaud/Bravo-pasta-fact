import { LinkCookiePolicy, LinkPrivacyPolicy } from "./config";

export const menuMain = [
    {
        name: "Home",
        url: "/",
        highlighted: false,
    },
    {
        name: "Menu",
        url: "/menu",
        highlighted: false,
    },
    {
        name: "About Us",
        url: "/about-us",
        highlighted: false,
    },
    {
        name: "Gallery",
        url: "/gallery",
        highlighted: false,
    },
    {
        name: "Contact",
        url: "/contact",
        highlighted: false,
    },
    {
        name: "Book",
        url: "/book",
        highlighted: true,
    },
];

export const footerPrimary = [
    {
        title: "Navigatie",
        items: [
            { name: "home", url: "/" },
        ],
    },
];

export const footerSecondary = [
    {
        title: "support",
        items: [
            { name: "pricing", url: "/pricing" },
        ],
    },
];

export const footerTertiary = [
    {
        title: "Links",
        items: [
            { name: "privacybeleid", url: LinkPrivacyPolicy },
            { name: "cookiebeleid", url: LinkCookiePolicy },
            { name: "api status", url: "/api-status" },
        ],
    },
];