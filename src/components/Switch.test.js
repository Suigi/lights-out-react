import React from 'react'
import {shallow} from 'enzyme'
import Switch from './Switch'

it('renders without crashing', () => {
    shallow(<Switch />)
})

it('renders a checkbox', () => {
    const underTest = shallow(<Switch />)
    expect(
        underTest.find({type:'checkbox'})
    ).toHaveLength(1)
})

it ('renders a selected checkbox if state is on', () => {
    const underTest = shallow(<Switch isOn={true} />)
    const checkbox = 
    expect(
        underTest
            .find({type:'checkbox'})
            .props().checked
    ).toBe(true)
})