import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

interface Props {
}
const Header: React.FC<Props> = ({ }) => {
    const state = useSelector((state: any) => state);
    const auth = useSelector((state: any) => state.auth);

    const renderContent = () => {
        switch (auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login to Google</a></li>;
            default:
                return <li><a href="/api/logout">Logout</a></li>;
        }
    }
    return (
        <nav>
            <div>
                <Link
                    to={auth ? '/dashboard' : '/'}
                    className="left brand-logo"
                >
                    {JSON.stringify(state)}
                </Link>
                <ul className="right">
                    {renderContent()}
                </ul>
            </div>
        </nav>

    )
}

export default Header;