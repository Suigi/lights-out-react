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

it('renders a selected checkbox if state is on', () => {
    const underTest = shallow(<Switch isOn={true} />)
    expect(
        underTest
            .find({type:'checkbox'})
            .props().checked
    ).toBe(true)
})

it('calls toggle callback on change', () => {
    let wasCalled = false
    const callback = () => { wasCalled = true }

    const underTest = shallow(<Switch isOn={true} toggle={callback} />)
    underTest
        .find({type:'checkbox'})
        .simulate('change', {target: {checked: false}})

    expect(wasCalled).toBe(true)
})