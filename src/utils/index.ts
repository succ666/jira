import {useEffect, useState} from "react";

export const isFalsy = (value: any) => value === 0 ? false : !value;
export const cleanObject = (object: any) => {
    const result = {...object}
    Object.keys(result).forEach(key => {
        const value = result[key]
        if(isFalsy(value)){
            delete result[key]
        }
    })
    return result
}
export const useMount = (callback: any) => {
    useEffect( () => {
        callback()
    }, [])
}

export const useDebounce = <T>(value: T, delay?: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const timeout = setTimeout(()=> setDebouncedValue(value), delay)
        // 每次在上一个useEffect处理完以后再运行
        return () => clearTimeout(timeout)
    },[value, delay])
    return debouncedValue;
};

export const useArray = <T>(initialArray: T[]) => {
    const [value, setValue] = useState(initialArray)
    const clear = () => setValue([])
    const removeIndex = (index: number) => {
        const arr = value.slice()
        arr.splice(index,1)
        setValue([...arr])
    }
    const add = (item: T) => {
        setValue([...value,item])
    }
    return {value, clear, removeIndex, add}
    // const [value, setValue] = useState(initialArray)
    // return {
    //     value,
    //     setValue,
    //     add: (item: T) => setValue([...value, item]),
    //     clear: () => setValue([]),
    //     removeIndex: (index: number) => {
    //         const copy = [...value]
    //         copy.splice(index, 1)
    //     }
    // }
}

