import React from "react";
import {Input, Select} from "antd";

export type Param = { name: string, personId: string}
export type User = {
    id: number,
    name: string,
    email: string,
    title: string,
    organization: string;
    token: string;
}
interface props {
    users: User[],
    param: Param,
    setParam: (param: Param) => void;
}
export const SearchPanel = ({users, param, setParam}: props) => {

    return <form action="">
        <div>
            <Input type="text" value={param.name} onChange={evt => setParam({
                ...param,
                name: evt.target.value
            })}/>
            <Select
                value={param.personId}
                onChange={value => setParam({
                ...param,
                personId: value
            })}>
                <Select.Option value={-1} key={-1}>负责人</Select.Option>
                {
                    users.map(user =>
                        <Select.Option value={user.id} key={user.id}>
                            {user.name}
                        </Select.Option>)
                }
            </Select>
        </div>
    </form>
}
