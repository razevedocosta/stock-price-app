import { Link } from 'react-router-dom';
import { FiLogOut, FiSettings, FiUser, FiBookOpen } from 'react-icons/fi';

import { Container, Content } from "./styles";

export function Header() {
    return (
        <Container>
            <Content>
                <Link to="/dashboard">
                    <h1>Search Stock Price</h1>
                </Link>

                <div>
                    <Link to="/orders" title="Orders"> <FiBookOpen size={20} /></Link>
                    <Link to="/" title="Settings"> <FiSettings size={20} /></Link>
                    <Link to="/" title="Profile"> <FiUser size={20} /></Link>
                    <Link to="/" title="Logout"> <FiLogOut size={20} /></Link>
                </div>
            </Content>
        </Container>
    )
}