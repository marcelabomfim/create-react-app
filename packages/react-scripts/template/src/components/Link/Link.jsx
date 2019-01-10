import React from 'react';

import './Link.css';

export default ({ href, label }) => (
  <a
    className="Link"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {label}
  </a>
);
