import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext';
import Account from '../Account';
import './MyAccount.css';
import { Link } from 'react-router-dom'

const MyAccount = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/account/login');
        }
    }, [user]);

    if (!user) return null;

    return (
        <Account>
            <div className="order__history__container">
                <div className="order__history">
                    <div className="order__history__header">Order History</div>
                    <div className="order__history__detail">You have not placed any orders yet</div>
                </div>
            </div>
            <div className="account__details__container">
                <div className="account__details__header">
                    <div className="details__header">Account Details</div>
                    <div className="logout__action" onClick={logout}>Logout</div>
                </div>
                <div className="account__details">
                    <div className="account__holder__name">{user.firstName}</div>
                    <div className="account__holder__email">{user.email}</div>
                    <div className="manage__account__action">
                        <Link to="/account/manage">Manage account</Link>   
                    </div>
                </div>
            </div>
        </Account>
    );
}

export default MyAccount;
