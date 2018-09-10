import React from 'react'
import Counter from './Counter'

class App extends React.Component {
    
    render() {
        return (
            <div style={{
                display: 'flex',
                flexWrap: 'wrap' ,
                textAlign : 'center'
            }}>
                <Counter key={0} id={0} />
            </div>
        )
    }
}

export default App