const React = require("react");

class Index extends React.Component {
  render() {
    const { other } = this.props;
    return (
      <div>
        <h1>Turtles Index Page</h1>
        <nav>
            <a href="/">Home</a>
        </nav>
        {other.map((other, index) => {
          return (
            <div>
                <h3 key={index}>{other.name}</h3>
              <p>{other.name} uses {other.weapon}.</p>
            </div>
          );
        })}
      </div>
    );
  }
}

module.exports = Index;