import React, {useState} from "react";
export default function ExampleFunction(){

//**  // sử dụng useState
    // tên state, metod update state = giá trị khởi tạo của state 
    const[count, setCount] = useState(0);
 // useState có tham số: 1 là state tương đương count, 1 method xử lí cập nhập giá trị cho state là setCount

// Vidu : giá trị khởi tạo của state là 1 function 

    let total = 0;
    const initalValue = () => {
        for(let i=0 ; i<5; i++){
             total += i
        }
        console.log("initalValue()")
        return total
    }
 //**   // const[number, setNumber] = useState(initalValue());
    // nếu như thế này cứ mỗi khi re-render thì hàm initalValu() lại chạy lại
    // nếu initalValue() load dữ liệu lớn thì ctrinh sẽ bị ảnh hương đến hiệu xuất
    // khắc phục bằng cách :
    const[number, setNumber] = useState(()=>{
        return initalValue();
    });

    const handleCkick = () => {
    //gọi setCout để update lại state count
      // setCount(count+1);

    //Ví dụ gọi lại nhiều setCount
      // nếu gọi lại setCount nhiều lần thì kết quả vẫn là 1
      // vì chưa kịp cập nhập lại giá trị mới cho state thì lại gọi đến tiếp
        // setCount(count+1); // output : 1
        // setCount(count+1); // output : 1
      // để giải quyết vấn đề trên ta cần làm như sau
        // + Viết 1 arrow function trong hàm setCount
        // + preState là giá trị mới nhất của state
        setCount((preState)=>{
            return preState+1; // 0 + 1 = 1
        })
        setCount((preState)=>{
            return preState+1; // 1 + 1 = 2
        })
    }
//** khi chúng ta thực hiện set lại giá trị cho 1 state trong function component thì lúc này giá trị của state sẽ bị thay thế
  // chứ không phải merg 2 giá trị lại với nhau
    const  [user,setUser] = useState({
        name : "test",
        age:12
    })
    const handleCkickUser = () => {
        setUser({names:"doanh mádx"})
    }

    return (
        <div>
            <pre>Functional component</pre>
            <p> you click  {count} times </p>
            <button type="button" onClick={handleCkick}>Submit</button>

            <p> giá trị user ban đầu :  {JSON.stringify(user)}  </p>
            <button type="button" onClick={handleCkickUser}>handleCkickUser 2</button>
        </div>
    )
}