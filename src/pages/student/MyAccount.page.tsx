import { Box, Button, Flex, Link, VStack } from "@chakra-ui/react";
import { StudentSidebar } from "./MyArticles.page";
import { AdminHeader } from "../admin/AdminHome.page";

function MyAccount() {
    return(
        <Box>
            <AdminHeader />
            <Flex>
                <StudentSidebar />
            </Flex>
        </Box>
    )
}

export default MyAccount