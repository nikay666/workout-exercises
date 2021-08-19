import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { SelectTime } from "./SelectTime";



describe('Select Time Component', () => {
  describe('SelectTime render', () => {
    beforeEach(() => {
      const changeHandlerMock = jest.fn()
      render(<SelectTime changeHandler={changeHandlerMock} />)
    })

    it('Should be button start', () => {
      const button = screen.getByText('Start')
      expect(button).toBeInTheDocument()
    })
  
    it('Should be a title Select time', () => {
      const title = screen.getByRole('heading',{level: 2, name: 'Select time:'})
      expect(title).toBeInTheDocument()
    })
  
    it('Should be 1 form', () => {
      const form = screen.getByRole('form')
      expect(form).toBeInTheDocument()
    })
  
    it('Should be input Minutes', () => {
      const input = screen.getByLabelText('Minutes', {selector: 'input'})
      expect(input).toHaveAttribute('type', 'number')
    })
  })

  describe('SelectTime events', () => {
    it('Button CLick', () => {
      const changeHandlerMock = jest.fn()
      render(<SelectTime changeHandler={changeHandlerMock} />)
      const button = screen.getByText('Start')
      fireEvent.click(button)
      expect(changeHandlerMock).toHaveBeenCalledTimes(1)
    })
  })
})