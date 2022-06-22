import React from "react";
import Item from "./Item";


class ShoppingList extends React.Component {
  state = {
    selectedCategory: "All",
    itemsToDisplay: this.props.items
  }
  handleCategoryChange(e) {
    console.log(e.target.value)
    this.setState({
      selectedCategory: e.target.value,
      itemsToDisplay: this.state.itemsToDisplay.filter((item) => {
        if (this.state.selectedCategory === "All") return true;

        return item.category === this.state.selectedCategory;
      })
    })

  }
  render() {
    return (
      <div className="ShoppingList">
        <div className="Filter">
          <select name="filter" onChange={(e) => this.handleCategoryChange(e)}>
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
