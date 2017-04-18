import React from 'react';
import { Link, Route } from 'react-router-dom';

import Home from 'components/Home';
import Rectangle from 'components/Rectangle';
import Cuboid from 'components/Cuboid';
import Sphere from 'components/Sphere';
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
      <Route exact path="/rechteck" component={Rectangle} />
      <Route exact path="/quader" component={Cuboid} />
      <Route exact path="/kugel" component={Sphere} />
    </main>
  </div>
);

export default Application;
