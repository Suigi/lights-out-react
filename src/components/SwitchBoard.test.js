import React from 'react'
import {shallow, mount, render} from 'enzyme'
import SwitchBoard from './SwitchBoard'
import Switch from './Switch'

it('should render without crashing', () => {
    shallow(<SwitchBoard />)
})

it('should contain switches', () => {
    const underTest = shallow(<SwitchBoard rows={3} cols={3} litIndices={{}} toggle={()=>{}}/>)
    const switches = underTest.find(Switch)
    expect(
        switches
    ).toHaveLength(9)
})

it('should have class SwitchBoard', () => {
    expect(
        shallow(<SwitchBoard />).hasClass('SwitchBoard')
    ).toBe(true)
})