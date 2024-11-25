import CommonLayout from "@/common/layouts/CommonLayout";
import SignUpCard from "@/components/Authentication/SignUpCard";
import { NextPageWithLayout } from "@/types/types";
import { ReactElement } from "react";


const SignUp: NextPageWithLayout = () => {
    return <SignUpCard />;
};

export default SignUp;

SignUp.getLayout = function getLayout(page: ReactElement) {
    return (
        <CommonLayout>
            {page}
        </CommonLayout>
    )
}