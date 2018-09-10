import React from 'react' 
import Card from '@material-ui/core/Card'

class Counter extends React.Component {
    render() {
        return (
            <div styles={{
                textAlign : 'center' , 
                marginLeft : 'auto' , 
                marginRight : 'auto' , 
                paddingTop : 200 , 
                width : 500 
            }}>
                <Card styles={{
                    padding : '40 20 20 20'
                }}>

                </Card>
            </div>
        )
    }
}

export default Counter ;