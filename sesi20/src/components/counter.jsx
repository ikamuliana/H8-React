import {useEffect, useState} from 'react';

function Counter () {
    const [counter, setCounter] = useState(0)

    useEffect (() => {
        window.addEventListener('blur', () => {
            console.log('effect berjalan')
        })

        return () => {
            window.removeEventListener('blur', )
        }
    })

    useEffect(
    // componentDidUpdate()
    () => {
        console.log('Hanya jalan sekali')
    }, 
    // souldComponentUpdate() => false (jika[ ])
    [])

    useEffect(
    // componentDidMount()
    // componentDidUpdate()
    () => {
        if (counter > 0) console.log('Hanya ketika counter berjalan')
    }, 
    // shouldComponentUpdate
    [counter])

    return (
        <div>
            <h2>Let's count!</h2>
            <h3>{counter}</h3>

            {/* Bonus: in-line styling */}
            <button onClick={() => setCounter(counter + 1)}
            style={{fontSize:'2em'}}
            >
                Hit me!
            </button>
        </div>
    )
}

export default Counter