import { Route } from "react-router-dom";
import MCHome from "../pages/marketing coordinator/MCHome.page";
function MCRoute() {
    return (
        <>
            <Route path="/MC" element={<MCHome />} />
        </>
    );
}

export default MCRoute;