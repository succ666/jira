import React from "react";
import {SearchPanel} from "./search-panel";
import {List} from "./list";
import {useEffect, useState} from "react";
import {cleanObject, useDebounce, useMount} from "../../utils";
import {useHttp} from "../../utils/http";
import styled from "@emotion/styled";

export const ProjectListScreen = () => {
    const [users, setUsers] = useState([])
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [list, setList] = useState([])
    const debounceParam = useDebounce(param, 500)
    const client = useHttp()

    useEffect(() => {
        client('projects', {data: cleanObject(debounceParam)}).then(setList)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[debounceParam])
    useMount(() => {
        client('users').then(setUsers)
    })
    return <Container>
        <h2>项目列表</h2>
        <SearchPanel users={users} param={param} setParam={setParam} ></SearchPanel>
        <List users={users} list={list}></List>
    </Container>
}

const Container = styled.div`
padding: 3.2rem;
`
