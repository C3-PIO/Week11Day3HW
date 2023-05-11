const React = require("react");

class Index extends React.Component {
  render() {
    const { villians } = this.props;
    return (
      <div>
        <h1>Villians Index Page</h1>
        <nav>
            <a href="/" >Home</a>
            <a href='villians/New' ><span> Create a Villian</span></a>
        </nav>
        {villians.map((villian, index) => {
          return (
            <div>
              <a href={`villians/${index}`}>
                <h3 key={index}>{villian.name}</h3>
              </a>
              <p>
                {villian.name} is a {villian.type}.
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

module.exports = Index;
