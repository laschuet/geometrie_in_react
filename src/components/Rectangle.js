import React from 'react';

import styles from 'stylesheets/components/common/typography';

const Rectangle = () => (
  <div>
    <h1 className={styles.heading}>Rechteck</h1>
    <div>
      <h2>Eingabe</h2>
      <form>
        <div>
          <label id="rechteck_a">a:
            <input type="text" />
          </label>
        </div>
        <div>
          <label id="rechteck_b">b:
            <input type="text" />
          </label>
        </div>
      </form>
      <h2>Flächeninhalt</h2>
      <span>0</span>
    </div>
  </div>
);

export default Rectangle;
