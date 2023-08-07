import React from "react";
import {User} from "./search-panel";

export type project = {
    id: number,
    name: string,
    personId: number,
    organization: string,
    created: number
}
interface props {
    list: project[],
    users: User[]
}
export const List = ({list, users}: props) => {
    return <table>
        <thead>
            <tr>
                <th>名称</th>
                <th>负责人</th>
            </tr>
        </thead>
        <tbody>
        {
            list.map(project => <tr key={project.id}>
                <td>{project.name}</td>
                <td>{users.find(user => user.id === project.personId)?.name || '未知'}</td>
            </tr>)
        }
        </tbody>
    </table>
}
