import React from 'react';

import styles from 'stylesheets/components/common/typography';

class Kugel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radius: 0,
      volumen: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const r = event.target.value;
    this.setState({
      radius: r,
      volumen: this.computeVolume(r)
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
                value={this.state.radius}
                onChange={this.handleChange}
              />
            </label>
          </form>
          <h2>Volumen</h2>
          <span>{this.state.volumen}</span>
        </div>
      </div>
    );
  };
}

export default Kugel;
