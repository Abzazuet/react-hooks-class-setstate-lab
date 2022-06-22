import React from "react";
import Item from "./Item";


class ShoppingList extends React.Component {
  state = {
    selectedCategory: "All",
    itemsToDisplay: this.props.items
  }
  handleCategoryChange = e => {
    this.setState({
      selectedCategory: e.target.value,
      itemsToDisplay: this.props.items.filter((item) => {
        if (e.target.value === "All") return true;

        return item.category === e.target.value;
      })
    })

  }
  render() {
    return (
      <div className="ShoppingList">
        <div className="Filter">
          <select name="filter" onChange={this.handleCategoryChange}>
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>
        <ul className="Items">
          {this.state.itemsToDisplay.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
