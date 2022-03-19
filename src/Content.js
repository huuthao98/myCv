import { useEffect } from "react"

const tabs = ['day', 'month', 'year']
function Content() {
    
    useEffect(() => {

    })
    return (
        <div>
            {tabs.map(tab => (
                <button key={tab}>
                    {tab}
                </button>
            ))}
            
        </div>
    )
}
export default Content