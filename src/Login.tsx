import {useState} from "react"
type LoginData={
    email: string,
    password: string
}
type Result = {
    name: string        
    roll: number
    eventName: string
    eventLocation: string
    eventDescription: string
}
export default function Login(){
   const [Login, setLogin]=useState<LoginData>({
    email: "",
    password: ""
   })
   const [result, setResult]=useState<Result[]>([])
   const LoginForm = () => {
        fetch("http://localhost:8080/StuLogin/", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(Login)})
        .then((res) => {
            if (!res.ok) {
                throw new Error("HTTP error! Status: " + res.status);
            }
            return res.json();   
            })
        .then((data) => {
            console.log("Response:", data); 
            setResult(data);
        })
        .catch((err) => {
            console.error("Error:", err);
        });
}
console.log("result:", result);
    return (
    <>
        <div>
            <h1>Login Form</h1>
            <input type="text" placeholder="userName" onChange={(e) => setLogin({...Login, email: e.target.value})}></input><br/>
            <input type="password" placeholder="password" onChange={(e) => setLogin({...Login, password: e.target.value})}></input><br/>
            <button onClick={LoginForm}>Submit</button> &nbsp;&nbsp;
            <a href={"/register"}>Click to Register</a>
        </div>
        {result.map((item,index) => (
            <div key={index}>
               <p>{item.name}</p>
               <p>{item.roll}</p>
               <p>{item.eventName}</p>
               <p>{item.eventLocation}</p>
               <p>{item.eventDescription}</p>
               <br/>
            </div>
        ))}
    </>
    )
}