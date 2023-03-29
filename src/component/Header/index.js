import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {

    const renderMainContent = () => {
        return (
            <div className="Header">
                <div className="Navbar">
                     <Link to='/'>
                        <p>Home</p>
                    </Link>
                    <Link to='/line_chart'>
                        <p>Line Chart</p>
                    </Link>
                    <Link to='/bar_chart'>
                        <p>Bar Chart</p>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            { renderMainContent() }
        </>
    );
};

export default Header;