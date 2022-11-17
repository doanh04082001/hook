import React from "react";
const ItemBox = (props) => {
    return (
        <li key={props.i}>
            {props.propsBox}
        </li>
    )
}

const BoxList = (props) => {
    return (
        <ul className="box-list">
            {props.boxList.map((itemBox , i)=>{
               return <ItemBox propsBox={itemBox} key={i}/>
            }
            )}
        </ul>
    )

}
export default BoxList