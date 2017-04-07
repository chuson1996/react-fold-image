import React, { Component } from 'react';
import FoldImage from '../lib/react-fold-image';
import media from './theme/media';
import ToggleState from './components/ToggleState/ToggleState';
import styled from 'styled-components';
import './App.css';

const StyledFoldImage = styled(FoldImage)`
  width: 70%;
  ${media.tablet`
    width: 100%;
  `}
`;

class Example extends Component {
  render() {
    return (
      <div className="App">
        <ToggleState>
          {({state, toggle}) =>
            <div>
              <button onClick={toggle}>Toggle</button>
              <StyledFoldImage
                noCol={4}
                noRow={4}
                earlyRatio={0.4}
                startingPoint={0}
                startingDirection={'down'}
                src={'https://upload.wikimedia.org/wikipedia/commons/6/68/Great_Ex_Telescope_Telescope.jpg'}
                hide={state}/>
            </div>
          }
        </ToggleState>
      </div>
    );
  }
}

export default Example;
