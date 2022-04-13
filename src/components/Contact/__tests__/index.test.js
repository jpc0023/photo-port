import React from "react";
import { render, cleanup, getByTestId } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import ContactForm from "..";

afterEach(cleanup)

describe('contact form is rendering', () => {

    it('renders', () => {
      render(<ContactForm />);
    })
  
    it('renders', () =>{
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
    })
})

// describe('data-testid matches Contact Me', () => {
//     it('matches text content for Contact Me', () => {
//         const { getByTestId } = render(<Nav
//             categories={categories}
//             setCurrentCategory={mockCurrentCategory}
//             currentCategory={mockCurrentCategory}
//             contactSelected={mockContactSelected}
//             setContactSelected={mockSetContactSelected}
//             />);
//         expect(getByTestId())
//     })