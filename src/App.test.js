import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

import {createSerializer} from 'enzyme-to-json';
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

describe('App Module', () => {
  const app = shallow(<App />);

  it('Render properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('initializes the state with an empty list of gift', () => {
    expect( app.state().gifts).toEqual([]);
  });

  describe('when cliking the add gift button', () => {

    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });

    // reverse the effect of beforeEach
    afterEach(() => {
      app.setState({gifts: []});
    });

    it('add a new gift to state', () => {
      expect( app.state().gifts).toEqual([{id: 1}]);
    });
  
    it('add a new gift to the render list', () => {
      expect( app.find('.gift-list').children().length).toEqual(1);
    });
  });

  describe('when cliking the remove gift button', () => {
    const id = 1;
    beforeEach(() => {
      app.find('.btn-add').simulate('click');
      app.instance().removeGift(id);
    });

    it('remove the gift from state', () => {
      expect(app.state().gifts).toEqual([]);
    });

  });

});
