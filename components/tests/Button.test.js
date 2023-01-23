import React from "react";
import Button from "../Button";
import { render, screen, fireEvent } from "@testing-library/react-native";

describe("Button", () => {
    it("should render correctly", () => {
        render(<Button />);
        const title = screen.getByText("Menu");
        expect(title).toBeTruthy();
        
    });

    it("should call onPress when clicked", () => {
        const onPress = jest.fn();
        render(<Button onPress={onPress} />);
        const button = screen.getByText("Menu");
        fireEvent.press(button);
        expect(onPress).toHaveBeenCalled();
    
    });

});


