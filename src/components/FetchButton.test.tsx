import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { FetchButton } from './FetchButton'

describe('<FetchButton />', () => {
  test('it renders correctly', () => {
    const clickHandler = jest.fn()
    const loading = false
    const component = shallow(<FetchButton loading={loading} clickHandler={clickHandler} />)
    expect(toJson(component)).toMatchSnapshot()
  })

  test('it calls function on button click', () => {
    const clickHandler = jest.fn()
    const loading = false
    const component = shallow(<FetchButton loading={loading} clickHandler={clickHandler} />)
    component.simulate('click')
    expect(clickHandler).toBeCalledTimes(1)
  })

  test('button is disabled while loading', () => {
    const clickHandler = jest.fn()
    const loading = true
    const component = shallow(<FetchButton loading={loading} clickHandler={clickHandler} />)
    expect(component.find('button').prop('disabled')).toBeTruthy()
  })
})
