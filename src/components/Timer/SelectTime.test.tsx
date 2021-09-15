import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

    it('Should be button disabled', () => {
      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
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
    beforeEach(() => {
      const changeHandlerMock = jest.fn()
      render(<SelectTime changeHandler={changeHandlerMock} />)
    })

    it('Button Click', () => {
      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
    })

    it('Select minutes', () => {
      const input = screen.getByLabelText('Minutes', {selector: 'input'}) as HTMLInputElement
      userEvent.type(input, '42' )
      expect(input.value).toBe('42')
    })

    it('Should active button after input', () => {
      const input = screen.getByLabelText('Minutes', {selector: 'input'}) as HTMLInputElement
      userEvent.type(input, '42' )
      expect(input.value).toBe('42')
      const button = screen.getByRole('button')
      expect(button).not.toBeDisabled()
    })

  })
})