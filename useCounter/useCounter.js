import { useState } from 'react'

export const useCounter = (initialState = 0) => {
    const [state, setState] = useState(initialState)

    const increment = () => setState( state + 1 )

    const decrement = () => setState( Math.max(state - 1, initialState) )

    const reset = () => setState(initialState)

    return {
        state,
        increment,
        decrement,
        reset
    }
}
