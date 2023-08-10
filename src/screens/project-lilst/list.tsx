import React from "react";
import {User} from "./search-panel";
import {Table} from "antd";

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
    return <Table pagination={false} columns={[{
        title: '名称',
        dataIndex: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name)
    },{
        title: '负责人',
        render(value, project){
            return <span>
                {users.find(user => user.id === project.personId)?.name || '未知'}
            </span>
        }
    }]} dataSource={list}></Table>
}
