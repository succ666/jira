import React from "react";
import {ProjectListScreen} from "./screens/project-lilst";
import {useAuth} from "./auth-context";
import {Button} from "antd";
export const AuthenticatedApp = () => {
    const {logout} = useAuth()
    return <div>
        <Button onClick={logout}>登出</Button>
        <ProjectListScreen/>
    </div>
}
