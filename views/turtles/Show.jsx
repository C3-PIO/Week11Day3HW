const React = require('react')

class Show extends React.Component {
    render(){
        const turtle = this.props.turtle
        // console.log(turtle)
        // console.log(turtle.imagePath)
        return (
            <div>
                <h1>{turtle.name} Page</h1>
                <img src={turtle.imagePath} />
            </div>
        )
    }
}

module.exports = Show