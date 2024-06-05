import { useEffect, useState } from "react"

function Counter () {
    const [angka, setAngka] = useState(0)

    function addAngka() {
        setAngka(angka +1)    
    }

    function updateDOM() {
        console.log("Lifecycle : dimount")
        
        // melakukan side effect
        document.title = `Hasil: ${angka}`

    }

    useEffect(updateDOM, [angka]) 

        console.log("Lifecycle dirender")

    return (
        <div>
            <h2>Hasil : {angka}</h2>
            <button onClick={addAngka}>add</button>
        </div>
    )
}

export default Counter