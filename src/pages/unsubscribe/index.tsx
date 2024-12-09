import CommonLayout from "@/common/layouts/CommonLayout";
import UnsubscribePage from "@/container/unsubscribepage/UnsubscribePage";
import { NextPageWithLayout } from "@/types/types";
import { ReactElement } from "react";


const SignUp: NextPageWithLayout = () => {
    return <UnsubscribePage/>;
};

export default SignUp;

SignUp.getLayout = function getLayout(page: ReactElement) {
    return (
        <CommonLayout>
            {page}
        </CommonLayout>
    )
}