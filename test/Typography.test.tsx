import React from 'react';
import * as ReactDOM from 'react-dom';
import { Body, Display, Title, Headline, Label } from '../stories/Typography.stories';

describe('Body', () => {
  
  it('renders body typography without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Body />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders title typography without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Title />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders display typography without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders headline typography without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Headline />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders label typography without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Label />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});
