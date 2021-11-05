import { useState } from 'react'

const useHover = () => {

    const [hovering, setHovering] = useState(false)
    
    const enter = () => setHovering(true)
    const leave = () => setHovering(false)

    return { hovering, enter, leave}
}

export default useHover
