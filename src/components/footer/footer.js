import React from "react";

import { Logo } from "../logo/logo";
import "./footer.scss";

export const Footer = () => {
    return (
        <Logo 
            isImg={false}
            isName={true}
            isDesc={false} 
            logoClass = "footer__logo"
            nameClass = "logo__name  uppercase"
            companyName="&copy; Бутурлин"
        />
    )
}