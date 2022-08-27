import React from 'react';
import * as ReactDOM from 'react-dom';
import { Body, Display, Title, Headline, Label } from '../stories/Typography.stories';

describe('Body', () => {
  
  it('renders body typography without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Body type="body" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders title typography without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Title type="title" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders display typography without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display type="display" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders headline typography without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Headline type="headline" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders label typography without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Label type="label" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});
