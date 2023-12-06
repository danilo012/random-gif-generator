import { useState } from "react"
import Common from "./Common"
const Tag = () =>{
    const [tag, setTag] = useState('')
    const {gif, fetchImg} = Common()
    return (
    <div className="container">
       
        <img src={gif} alt="Random Img" />
        <input type="text"  value={tag} onChange={(e)=>setTag(e.target.value)}/>
        <button onClick={()=>fetchImg(tag)}></button>
    </div>
    )
}

export default Tag
