import { useEffect } from "react"

const UseTitle=(title)=>{
    useEffect(()=>{

        document.title=`${title}-Dragoon News`

    },[title])
}
export default UseTitle