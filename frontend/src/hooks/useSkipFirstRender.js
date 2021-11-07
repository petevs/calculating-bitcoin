import { useRef, useEffect } from 'react'

const useSkipFirstRender = (callback, dependencies = []) => {
    
    const isMounted = useRef(false)

    useEffect(() => {
        if (isMounted.current){
            console.log('running')
            return callback()
        }
    }, dependencies)

    useEffect(() => {
        isMounted.current = true
    }, [])

}

export default useSkipFirstRender