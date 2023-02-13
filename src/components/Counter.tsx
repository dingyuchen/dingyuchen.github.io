import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    return <>
        <p>thsisi sa counter</p>
        <div className="text-large" onClick={() => setCount(count + 1)}>{count}</div>
    </>
}

export default Counter