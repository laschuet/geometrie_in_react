import React from 'react';
import { Link, Route } from 'react-router-dom';

import Home from 'components/Home';
import Rechteck from 'components/Rechteck';
import Quader from 'components/Quader';
import Kugel from 'components/Kugel';
import styles from 'stylesheets/components/application';

const Application = () => (
  <div className={styles.root}>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/rechteck">Rechteck</Link></li>
      <li><Link to="/quader">Quader</Link></li>
      <li><Link to="/kugel">Kugel</Link></li>
    </ul>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/rechteck" component={Rechteck} />
      <Route exact path="/quader" component={Quader} />
      <Route exact path="/kugel" component={Kugel} />
    </main>
  </div>
);

export default Application;
