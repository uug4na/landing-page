// HeaderOne.tsx
'use client'
import Link from 'next/link';
import React, { useState } from 'react';

interface MenuItem {
    id: number;
    title: string;
    section: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        title: string;
        link: string;
    }[];
}

interface HeaderProps {
    scrollToSection?: (ref: React.RefObject<HTMLDivElement>) => void; // Made optional
    refs?: { // Made optional
        heroRef: React.RefObject<HTMLDivElement>;
        aboutRef: React.RefObject<HTMLDivElement>;
        servicesRef: React.RefObject<HTMLDivElement>;
        aboutUsRef: React.RefObject<HTMLDivElement>;
    };
}

const menu_data: MenuItem[] = [
    {
        id: 1,
        title: 'Home',
        section: 'hero',
        link: '#hero',
        has_dropdown: false,
    },
    {
        id: 3,
        title: 'Services',
        section: 'services',
        link: '#services',
        has_dropdown: false,
    },
    {
        id: 4,
        title: 'About Us',
        section: 'aboutUs',
        link: '#aboutUs',
        has_dropdown: false,
    },
    {
        id: 5,
        title: 'Contact',
        section: 'contact',
        link: '/contact',
        has_dropdown: false,
    },
];

const HeaderOne: React.FC<HeaderProps> = ({ scrollToSection, refs }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [navTitle, setNavTitle] = useState<string>("");

    const handleActive = (): void => setOpen(!open);

    const openMobileMenu = (menu: string): void => {
        if (navTitle === menu) {
            setNavTitle("");
        } else {
            setNavTitle(menu);
        }
    };

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, section: string): void => {
        e.preventDefault();
        // Only attempt scrolling if props are provided
        if (scrollToSection && refs) {
            switch (section) {
                case 'hero':
                    if (refs.heroRef) scrollToSection(refs.heroRef);
                    break;
                case 'about':
                    if (refs.aboutRef) scrollToSection(refs.aboutRef);
                    break;
                case 'services':
                    if (refs.servicesRef) scrollToSection(refs.servicesRef);
                    break;
                case 'aboutUs':
                    if (refs.aboutUsRef) scrollToSection(refs.aboutUsRef);
                    break;
                case 'contact':
                    window.location.href = '/contact';
                    break;
                default:
                    break;
            }
        } else if (section === 'contact') {
            // Fallback for contact link when no scrollToSection is provided
            window.location.href = '/contact';
        }
        // If no scrollToSection/refs, let the Link handle navigation (though it won’t scroll)
    };

    return (
        <div id="navigation" className="navbar-light bg-faded site-navigation">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-20 align-self-center">
                        <div className="site-logo">
                            <Link href="/"><img src="assets/Logo/white logo mn.png" alt="" /></Link>
                        </div>
                    </div>

                    <div className="col-60 d-flex justify-content-center">
                        <nav id="main-menu">
                            <ul>
                                {menu_data.map((item) => (
                                    <li key={item.id} className={item.has_dropdown ? 'menu-item-has-children' : ''}>
                                        <Link
                                            href={item.link}
                                            onClick={(e) => handleScroll(e, item.section)}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div id="sm_menu_ham" onClick={handleActive} className={`${open ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className={`sm_menu_outer slide ${open ? 'active' : ''}`}>
                        <ul className="mobile_menu">
                            {menu_data.map((item) => (
                                <li
                                    key={item.id}
                                    className={`${item.has_dropdown ? 'hasChild' : ''} ${navTitle === item.title ? "active" : ""}`}
                                    onClick={() => item.has_dropdown && openMobileMenu(item.title)}
                                >
                                    <Link
                                        href={item.link}
                                        onClick={(e) => handleScroll(e, item.section)}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderOne;
