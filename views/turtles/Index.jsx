const React = require("react");

class Index extends React.Component {
  render() {
    const { turtles } = this.props;
    return (
      <div>
        <h1>Turtles Index Page</h1>
        <nav>
            <a href="/" >Home</a>
            <a href='turtles/New'><span> Create a Turtle</span></a>
        </nav>
        {turtles.map((turtle, index) => {
          return (
            <div>
              <a href={`turtles/${index}`}>
                <h3 key={index}>{turtle.name}</h3>
              </a>
              <p>{turtle.name} uses {turtle.weapon}. They wear the {turtle.bandanaColor} bandana.</p>
            </div>
          );
        })}
      </div>
    );
  }
}

module.exports = Index;
