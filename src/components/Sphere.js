import React from 'react';

import styles from '../stylesheets/components/common/typography';

class Sphere extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radius: 0,
      volume: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const radius = event.target.value;
    const volume = this.computeVolume(radius);

    this.setState({
      radius: radius,
      volume: volume
    });
  }

  computeVolume(radius) {
    return 4 / 3 * Math.PI * Math.pow(radius, 2);
  }

  render() {
    return (
      <div>
        <h1 className={styles.heading}>Kugel</h1>
        <div>
          <h2>Eingabe</h2>
          <form>
            <label>r:
              <input
                type="text"
                name="radius"
                value={this.state.radius}
                onChange={this.handleChange}
              />
            </label>
          </form>
          <h2>Volumen</h2>
          <span>{this.state.volume}</span>
        </div>
      </div>
    );
  };
}

export default Sphere;
