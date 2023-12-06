import Common from "./Common"

const Random = () =>{
    const {gif, fetchImg} = Common()
    return (
    <div className="container">
        
        <img src={gif} alt="Random Img" />
        <button onClick={()=>fetchImg()}></button>
    </div>
)
}

export default Random
