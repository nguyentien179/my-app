import { Route } from 'react-router-dom';
import Login from '../pages/guest/Login.page';
import Register from '../pages/guest/Register.page';
import Homepage from '../pages/guest/Home.page';

function GuestRoute() {
    return (
        <>
            <Route path="/Login" element={<Login />} />
            <Route path="/" element={<Homepage />} />
            <Route path="/Register" element={<Register />} />
        </>
    );
}

export default GuestRoute;