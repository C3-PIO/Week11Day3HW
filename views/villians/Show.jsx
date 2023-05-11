const React = require('react')

class Show extends React.Component {
    render(){
        const villian = this.props.villian
        return (
            <div>
                <h1>{villian.name} Page</h1>
                <img src={villian.imagePath} />
            </div>
        )
    }
}

module.exports = Show