import React, { useEffect, useState } from 'react'

import './ThemeButton.scss';

const ThemeButton: React.FC = () => {
    const [modal, setModal] = useState(false)
    const [activeTheme, setActiveTheme] = useState(localStorage.getItem('AllTshirt_theme') ? localStorage.getItem('AllTshirt_theme') : 'default')

    const themesList = ['default', 'autumn', 'dark', 'aqua'];

    useEffect(() => {
        document.body.addEventListener('click', handleOnClick)
        return () => {
            document.body.removeEventListener('click', handleOnClick)
        }
    }, []);

    const handleOnClick = (e: Event): void => {
        const target = e.target as HTMLElement;
        if (!target.className.includes('theme')) {
            setModal(false)
        }
    }


    const onSelectedTheme = (el: string) => {
        localStorage.setItem('AllTshirt_theme', el);
        setActiveTheme(el);
        setBodyAttr(el);
        setModal(false);
    };

    const setBodyAttr = (el: string) => {
        document.querySelector('body').setAttribute('data-theme', el)
    }

    useEffect(() => setBodyAttr(activeTheme), [])

    return (
        <div className="theme_wrapper">
            <div className="theme">
                <p>Theme: <span onClick={() => setModal(prev => !prev)} className='theme_type'>{activeTheme}</span></p>

                {modal && (
                    <ul className="theme_popup">
                        {themesList.map(el => (
                            <li key={el} onClick={() => onSelectedTheme(el)}>{el}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
};

export default ThemeButton;