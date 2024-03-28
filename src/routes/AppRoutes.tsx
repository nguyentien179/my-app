import { Routes } from 'react-router-dom';

import GuestRoute from './guest.route';
import AdminRoute from './admin.route';
import StudentRoute from './student.route';
import MCRoute from './mc.route';
function AppRoutes() {
    return (
        <Routes>
            {GuestRoute() }
            {AdminRoute() }
            {StudentRoute() }
            {MCRoute() }
        </Routes>
    );
}

export default AppRoutes;