import {getCode} from '../utils/helperFunctions';
import ImageHeader from '../components/ImageHeader';
import src from 'https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.js';
import React from 'react'
import Link from 'next/link'

const Example = props => {
  return (
    <div>
      <Link href={'/'}>
        <a>Home</a>
      </Link>
    </div>
  );
};

<Link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css" />

var firebase = require('firebase');
var firebaseui = require('firebaseui');

  
ui.start('#firebaseui-auth-container', {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Other config options...
});

Example.displayName = 'Example'

Example.propTypes = {}

Example.defaultProps = {}

export default Example
