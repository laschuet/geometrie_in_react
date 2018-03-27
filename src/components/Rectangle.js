import React from 'react';

import styles from '../stylesheets/components/common/typography';

class Rectangle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edgeA: 0,
      edgeB: 0,
      area: 0
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const area =
        name === 'edgeA' ? value * this.state.edgeB : this.state.edgeA * value;

    this.setState({
      [name]: value,
      area: area
    });
  }

  render() {
    return (
      <div>
        <h1 className={styles.heading}>Rechteck</h1>
        <div>
          <h2>Eingabe</h2>
          <form>
            <div>
              <label>
                Seite a:
                <input
                  type="text"
                  name="edgeA"
                  value={this.state.edgeA}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Seite b:
                <input
                  type="text"
                  name="edgeB"
                  value={this.state.edgeB}
                  onChange={this.handleChange}
                />
              </label>
            </div>
          </form>
          <h2>Flächeninhalt</h2>
          <span>{this.state.area}</span>
        </div>
      </div>
    );
  }
}

export default Rectangle;
