import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(`useEffect Run ${count}`)

    }, [count])
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    )
}

export default UseEffectExample
