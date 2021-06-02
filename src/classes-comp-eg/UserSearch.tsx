import { Component } from "react";

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };

  findUser = () => {
    const foundUser = this.props.users.find(
      (user) => user.name === this.state.name
    );
    this.setState({ user: foundUser });
  };

  render() {
    return (
      <div>
        <h3>User Search</h3>
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.findUser}>Find User</button>
        <div>{this.state.user && this.state.user.age}</div>
      </div>
    );
  }
}

export default UserSearch;
