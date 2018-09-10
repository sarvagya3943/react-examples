import React from 'react' 
import Card from '@material-ui/core/Card'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    root : {
        textAlign : 'center' , 
        marginLeft : 'auto' , 
        marginRight : 'auto' , 
        paddingTop : 200 , 
        width : 500 
    } , 
    card : {
        padding : '40 20 20 20'
    }
})

class TodoApp extends React.Component {
    render() {
        const { classes } = this.props ;
        return (
            <div className={classes.root}>
                <Card className={classes.card}>
                    aksnvafjkcnjk
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(TodoApp) ;