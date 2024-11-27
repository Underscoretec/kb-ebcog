// pages/index.tsx
// import React from "react";

import CommonLayout from "@/common/layouts/CommonLayout";
import SignInCard from "@/components/Authentication/SignInCard";
import { NextPageWithLayout } from "@/types/types";
import { ReactElement } from "react";

const SignIn: NextPageWithLayout = () => {
  return <SignInCard />;
};
export default SignIn;

SignIn.getLayout = function getLayout(page:ReactElement) {
  return (
    <CommonLayout>
      {page}
    </CommonLayout>
  )
}