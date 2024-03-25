import { Routes, Route } from 'react-router-dom';

import GuestRoute from './guest.route';
import AdminRoute from './admin.route';
import StudentRoute from './student.route';

function AppRoutes() {
    return (
        <Routes>
            {GuestRoute() }
            {AdminRoute() }
            {StudentRoute() }
        </Routes>
    );
}

export default AppRoutes;