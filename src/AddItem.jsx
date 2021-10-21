import React from 'react';
// import foods from './foods.json';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      newFood: {
        name: '',
        calories: 0,
        image: '',
      },
    };
  }

  formItem = (event) => {
    this.setState({
      clicked: true,
    });
  };

  handleChange = (event) => {
    const newName = event.target.name;
    const type = event.target.type;
    let value =
      type === 'number'
        ? event.target.defaultValueAsNumber
        : event.target.defaultValue;
    if (Number.isNaN(value)) value = '';
    this.setState((previousState) => {
      return {
        newFood: {
          [newName]: value,
        },
      };
    });
  };

  handleFoodArray = () => {
    this.props.newFoodItem = [...this.props.foods, this.state.newFood];
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.props.foods);
    this.handleChange(event);
    this.handleFoodArray();
    this.setState({
      clicked: false,
    });
    console.log(this.props.foods);
  };

  render() {
    return (
      <div>
        <div className="control">
          <button onClick={this.formItem} className="button is-info">
            Add New Food Item
          </button>
        </div>
        <div>
          {' '}
          {this.state.clicked && (
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="name"
                defaultValue={this.state.newFood.name}
                placeholder="name"
                onChange={this.handleChange}
              />
              <input
                type="number"
                name="calories"
                defaultValue={this.state.newFood.calories}
                placeholder="calories"
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="image"
                defaultValue={this.state.newFood.image}
                placeholder="Image URL"
                onChange={this.handleChange}
              />
              <button>Submit</button>
            </form>
          )}
        </div>
      </div>
    );
  }
}

export default AddItem;
