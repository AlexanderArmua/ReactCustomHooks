import { useEffect, useRef, useState } from 'react'

export const useFetch = ( url ) => {

    // Using ´useRef´ will prevent a re-render on the current component
    const isMounted = useRef(true)

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    })

    // When the component is destroyed, we update an internal state
    useEffect(() => {
        return () => isMounted.current = false
    }, [])

    useEffect(() => {
        setState({
            ...state,
            loading: true
        })
        
        fetch( url )
            .then( resp => resp.json() )
            .then( data => {

                // If the component is unmounted, it won't update the state
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                } else {
                    console.warn('useFetch didn´t update the state after fetch URL')
                }

            })

    }, [url])

    return state;
}
