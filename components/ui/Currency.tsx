"use client"

import { useEffect, useState } from "react"

const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  })

interface CurrencyProps {
    value?: string | number
}

const Currency: React.FC<CurrencyProps> = ({
    value
}) => { 
    //We need this to prevent hydration errors, by doing this we are telling React that this component is mounted
    const [isMounted, setIsMounted] = useState(false)
    
    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }
    return ( 
        <div>
            {formatter.format(Number(value))}
        </div>
     );
}
 
export default Currency;