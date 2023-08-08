import React from "react";

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
            <input type="text" value={param.name} onChange={evt => setParam({
                ...param,
                name: evt.target.value
            })}/>
            <select value={param.personId} onChange={evt => setParam({
                ...param,
                personId: evt.target.value
            })}>
                <option>负责人</option>
                {
                    users.map(user => <option value={user.id} key={user.id}>{user.name}</option>)
                }
            </select>
        </div>
    </form>
}
