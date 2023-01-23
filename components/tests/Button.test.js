import React from "react";
import Button from "../Button";
import { render, fireEvent } from "@testing-library/react-native";

describe("Button", () => {
    it("should render correctly", () => {
        const { toJSON } = render(<Button />);
        expect(toJSON()).toMatchSnapshot();
    });
    
    it("should call onPress when pressed", () => {
        const onPress = jest.fn();
        const { getByTestId } = render(<Button onPress={onPress} />);
        fireEvent.press(getByTestId("button"));
        expect(onPress).toHaveBeenCalled();
    });
    });

    