import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from './navbar';

it('Navbar component snapshot', () => {
    const snap = renderer.create(<Navbar/>).toJSON();
    expect(snap).toMatchSnapshot();
});