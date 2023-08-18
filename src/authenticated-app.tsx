import React from "react";
import {ProjectListScreen} from "./screens/project-lilst";
import {useAuth} from "./auth-context";
import {Button, Dropdown, Menu} from "antd";
import styled from "@emotion/styled";
import {Row} from "./components/lib";
export const AuthenticatedApp = () => {
    const {logout, user} = useAuth()
    return <div>
        <Header between={true}>
            <HeaderLeft gap={true}>
                <h2>Logo</h2>
                <h2>项目</h2>
                <h2>用户</h2>
            </HeaderLeft>
            <HeaderRight>
                <Dropdown overlay={
                    <Menu>
                        <Menu.Item key={'logout'}>
                            <a onClick={logout}>登出</a>
                        </Menu.Item>
                    </Menu>
                }>
                <a onClick={e => e.preventDefault()}>
                    Hi, {user?.name}
                </a>
                </Dropdown>
            </HeaderRight>
        </Header>
        <Main>
            <ProjectListScreen/>
        </Main>
    </div>
}

const Header = styled(Row)`
  padding: 3.2rem;
  height: 6rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`
const HeaderLeft = styled(Row)`
`
const HeaderRight = styled.div``
const Main = styled.main`
height: calc(100vh - 6rem);
`
