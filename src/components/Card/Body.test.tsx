import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { Body } from './Body'

describe('<Body />', () => {
  test('it renders correctly', () => {
    const component = shallow(<Body />)

    expect(toJson(component)).toMatchSnapshot()
  })
})
