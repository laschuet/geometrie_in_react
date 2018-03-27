import React from 'react';

import styles from '../stylesheets/components/common/typography';

class Cuboid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edgeA: 0,
      edgeB: 0,
      edgeC: 0,
      volume: 0
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    let edgeA = this.state.edgeA;
    let edgeB = this.state.edgeB;
    let edgeC = this.state.edgeC;
    if (name === 'edgeA') {
      edgeA = value;
    } else if (name === 'edgeB') {
      edgeB = value;
    } else {
      edgeC = value;
    }
    const volume = edgeA * edgeB * edgeC;

    this.setState({
      [name]: value,
      volume: volume
    });
  }

  render() {
    return (
      <div>
        <h1 className={styles.heading}>Quader</h1>
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
            <div>
              <label>
                Seite c:
                <input
                  type="text"
                  name="edgeC"
                  value={this.state.edgeC}
                  onChange={this.handleChange}
                />
              </label>
            </div>
          </form>
          <h2>Volumen</h2>
          <span>{this.state.volume}</span>
        </div>
      </div>
    )
  }
}

export default Cuboid;
