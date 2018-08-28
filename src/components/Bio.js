import React from 'react';

// Import typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';

import profilePic from './profile-pic.jpg';
import { rhythm } from '../utils/typography';

const Bio = props => (
  <div
    style={{
      display: 'flex',
      marginBottom: rhythm(2.5),
    }}
  >
    <img
      src={profilePic}
      alt={props.author}
      style={{
        marginRight: rhythm(1 / 2),
        marginBottom: 0,
        width: rhythm(2),
        height: rhythm(2),
      }}
    />
    <p>
      Written by <strong>{props.author}</strong> who lives and works in Pangyo,
      building useless things.
    </p>
  </div>
);

export default Bio;
