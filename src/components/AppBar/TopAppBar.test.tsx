import { render, screen } from "@testing-library/react";
import React from "react";
import { TopAppBar } from "./TopAppBar";


const titleText = 'Home'


describe('TopAppBar', () => {
  it('should render props title', () => {
    render(<TopAppBar title={titleText} />)
    const title = screen.getByText(titleText)
    expect(title).toBeInTheDocument()
  })
})
