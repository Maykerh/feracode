import React from "react";
import { Link } from "react-router-dom";

import { GrTwitter } from "react-icons/gr";
import { AiOutlineUser, AiOutlineHome } from "react-icons/ai";

import SidePanel from "../SidePanel";

import { primaryBlue } from "../../styles/variables";

import {
    AppContainer,
    MenuContainer,
    Menu,
    MenuItem,
    ContentContainer,
    CenterContainer,
    RightContainer,
} from "./styles";

function DefaultLayout({ children }) {
    return (
        <AppContainer id={"app-container"}>
            <MenuContainer>
                <Menu>
                    <MenuItem>
                        <Link to={"/"}>
                            <div>
                                <GrTwitter size={25} color={primaryBlue} />
                            </div>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to={"/"}>
                            <div>
                                <AiOutlineHome size={32} />
                                <span>Home</span>
                            </div>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to={"/user-profile"}>
                            <div>
                                <AiOutlineUser size={32} />
                                <span>Profile</span>
                            </div>
                        </Link>
                    </MenuItem>
                </Menu>
            </MenuContainer>
            <ContentContainer id="scrollable-area">
                <CenterContainer>{children}</CenterContainer>
                <RightContainer className={"vertical-fixed"} id={"side-panel"}>
                    <SidePanel />
                </RightContainer>
            </ContentContainer>
        </AppContainer>
    );
}

export default DefaultLayout;
