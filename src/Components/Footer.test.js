import React from 'react'
import {render, screen} from '@testing-library/react'
import Adapter from "enzyme-adapter-react-16"
import Enzyme from "enzyme";
import Footer from './Footer'
const { shallow } = Enzyme; 

Enzyme.configure({ adapter: new Adapter() })

describe('Test for Footer', () => {
    test("renders correctly", () => {
        shallow(<Footer/>);
      });
})
