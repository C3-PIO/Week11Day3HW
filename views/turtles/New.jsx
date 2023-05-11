const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Turtle Page</h1>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action="/turtles" method="POST">
          Name: <input type="text" name="name" />
          <br />
          Bandana Color: <input type="text" name="bandanaColor" />
          <br />
          Weapons: <input type="text" name="weapon" />
          <br />
          <input type="submit" name="" value="Create Turtle" />
        </form>
      </div>
    );
  }
}

module.exports = New;