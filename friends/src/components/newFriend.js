class NewFriendForm extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
      age: '',
      email: '',
    };
  }

  onChange = (e) => {
    // Because we named the inputs to match their corresponding values in state, it's
    // super easy to update the state
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  render() {
    const { id, name, age, email } = this.state;
    return (
      <form>
        <input type="text" name="name" value={name} onChange={this.onChange} />
        <input type="text" name="age" value={age} onChange={this.onChange} />
        <input type="text" name="email" value={email} onChange={this.onChange} />
      </form>
    );
  }
}