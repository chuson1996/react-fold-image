/* eslint-disable */
import { injectGlobal } from 'styled-components';
import { gray, black, yellow, white } from './variables';

injectGlobal`
  body {
    background-color: ${yellow};
    ${''/* background: url(${require('assets/soft_kill.png')}) repeat; */}
    color: ${gray};
    font-family: 'VT323', monospace;
  }

  hr {
    border: 1px solid ${black};
  }

  button, a {
    color: ${gray};
    font-family: 'VT323', monospace;
    display: inline-block;
  }

  * {
    ${''/* pointer-events: none; */}
    -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  }

  a, button {
    pointer-events: auto;
  }
`;
