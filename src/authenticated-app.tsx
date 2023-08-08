import React from "react";
import {ProjectListScreen} from "./screens/project-lilst";
import {useAuth} from "./auth-context";
export const AuthenticatedApp = () => {
    const {logout} = useAuth()
    return <div>
        <button onClick={logout}>登出</button>
        <ProjectListScreen/>
    </div>
}
