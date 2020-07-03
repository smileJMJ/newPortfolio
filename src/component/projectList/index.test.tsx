import React from 'react';
import renderer from 'react-test-renderer';
import ProjectList from './index';

test('List loaded', () => {
    const component = renderer.create(
        <ProjectList/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});