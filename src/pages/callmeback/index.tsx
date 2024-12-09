import CommonLayout from "@/common/layouts/CommonLayout";
import CallBack from "@/container/callback/Callback";

import { NextPageWithLayout } from "@/types/types";
import { ReactElement } from "react";


const SignUp: NextPageWithLayout = () => {
    return <CallBack/>;
};

export default SignUp;

SignUp.getLayout = function getLayout(page: ReactElement) {
    return (
        <CommonLayout>
            {page}
        </CommonLayout>
    )
}