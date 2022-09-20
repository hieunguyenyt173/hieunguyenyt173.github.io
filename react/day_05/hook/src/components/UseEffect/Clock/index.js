import Reat, {useState, useEffect} from "react"

function Clock () {
    const [time, setTime] = useState(() => {
        let now = new Date();
        return now.toLocaleTimeString();
    })

    // useEffect(() => {
    //     let interval = setInterval(() => {
    //         console.log("inside Interval")
    //         let now = new Date();
    //         setTime(now.toLocaleTimeString());
    //     }, 1000)

    //     // Cleaup
    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [])

    useEffect(() => {
        const handleScroll = () => {
            console.log("scroll")
        }
            window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    })

    return (
        <div>
        <h1>
            Clock : {time}
        </h1>
        {console.log("render")}
        </div>
    )
}


export default Clock;