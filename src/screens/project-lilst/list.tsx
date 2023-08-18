import React from "react";
import {User} from "./search-panel";
import {Table} from "antd";
import {data} from "browserslist";
import dayjs from "dayjs";

export type project = {
    id: number,
    name: string,
    personId: number,
    organization: string,
    created: number,
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
        title: '部门',
        dataIndex: "organization"
    },{
        title: '创建时间',
        render(value, project){
            return <span>
                {project.created ? dayjs(project.created).format('YYYY-MM-DD') : '-'}
            </span>
        }
    },{
        title: '负责人',
        render(value, project){
            return <span>
                {users.find(user => user.id === project.personId)?.name || '未知'}
            </span>
        }
    }]} dataSource={list}></Table>
}
