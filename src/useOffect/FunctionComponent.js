import React, {useState,useEffect} from "react";
export default function FunctionComponent(){
    const [count,setCount] = useState(0);
    const [action,setAction] = useState('');

 // useEffect sẽ gọi lại mỗi khi re-render màn hình
    // useEffect(()=>{
    //     document.title = `you clicked ${count} times`;
    //     console.log("lăp lại mỗi khi re-render")
    // })
 // muốn khi 1 hay nhiều state thay đổi thì mới chạy lại useEffect thì làm cách sau:
 // thêm 1 tham số là [state] ở hàm useEffect
    // useEffect(()=>{
    //     document.title = `you clicked ${count} times`;
    //     console.log("re-render khi coutn thay đổi")
    // },[count])

// ví dụ
    useEffect(()=>{
        console.log(action)
        fetch(`https://reqres.in/api/${action}`)
        .then((response) => {
            console.log(response)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[action])
    const handleClick = () => {
        setCount(count+1)
    }
    return(
        <div>
            <p>you clicked {count} time</p>
            <button  onClick={ handleClick }>Click</button>
            <button  onClick={ () => { return setAction('users') } }>get user api</button>
            <button  onClick={ () => {return setAction('comments') } }>get comment api</button>
        </div>
    )
    
}