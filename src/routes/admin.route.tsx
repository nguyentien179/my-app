import { Route } from 'react-router-dom';
import Members from '../pages/admin/Members.page';
import Add from '../pages/admin/Add.page';
import SendNotif from '../pages/admin/SendNotification.page';
import CreateTopicForm from '../pages/admin/CreateTopic.page';
import AdminHome from '../pages/admin/AdminHome.page';
import ViewTopics from '../pages/admin/Topics.page';

function AdminRoute() {
    return (
        <>
            <Route path="/Admin" element={<AdminHome />} />
            <Route path="/Members" element={<Members />} />
            <Route path="/Add" element={<Add />} />
            <Route path="/SendNotif" element={<SendNotif />} />
            <Route path='/CreateTopic' element={<CreateTopicForm />} />
            <Route path='/ViewTopics' element={<ViewTopics />} />
        </>
    );
}

export default AdminRoute;