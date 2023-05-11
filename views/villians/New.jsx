const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Villian Page</h1>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action="/villians" method="POST">
          Name: <input type="text" name="name" />
          <br />
          Type: <input type="text" name="type" />
          <br />
          <input type="submit" name="" value="Create Villian" />
        </form>
      </div>
    );
  }
}

module.exports = New;