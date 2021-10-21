import React from 'react';
import AddItem from './AddItem';
import './App.css';
import foods from './foods.json';

function FoodBox(props) {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.image} alt={props.name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.name}</strong> <br />
              <small>{props.calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                defaultValue={props.quantity}
              />
            </div>
            <div className="control">
              <button
                className="button is-info"
                // onClick={props.handleIncrement}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods,
      newFoodItem: {
        name: '',
        calories: '',
        image: '',
        quantity: '',
      },
    };
  }

  // handleIncrement = (value) => {
  //   const newQuantity = value.quantity;
  //   });
  //   this.setState((currentState) => ({
  //     foods: value.quantity + 1,
  //   }));
  // };

  render() {
    return (
      <div>
        {foods.map((value) => {
          return (
            <FoodBox
              key={value.name}
              name={value.name}
              calories={value.calories}
              image={value.image}
              quantity={value.quantity}
              // handleIncrement={this.handleIncrement(value)}
            />
          );
        })}
        <AddItem
          foods={this.state.foods}
          newFoodItem={this.state.newFoodItem}
        />
      </div>
    );
  }
}

export default App;
