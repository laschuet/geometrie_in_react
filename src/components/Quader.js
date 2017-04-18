import React from 'react';

import styles from 'stylesheets/components/common/typography';

const Quader = () => (
  <div>
    <h1 className={styles.heading}>Quader</h1>
    <div>
      <h2>Eingabe</h2>
      <form>
        <div>
          <label id="quader_a">a:
            <input type="text" />
          </label>
        </div>
        <div>
          <label id="quader_b">b:
            <input type="text" />
          </label>
        </div>
        <div>
          <label id="quader_c">c:
            <input type="text" />
          </label>
        </div>
      </form>
      <h2>Volumen</h2>
      <span>0</span>
    </div>
  </div>
);

export default Quader;
