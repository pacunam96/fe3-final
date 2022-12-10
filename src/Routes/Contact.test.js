import React from 'react'
import {render, screen} from '@testing-library/react'
import Adapter from "enzyme-adapter-react-16"
import Enzyme from "enzyme";
import Contact from './Contact'
const { shallow } = Enzyme; 

Enzyme.configure({ adapter: new Adapter() })

describe('Test for Contact', () => {
    test("renders correctly", () => {
        shallow(<Contact/>);
      });
})
