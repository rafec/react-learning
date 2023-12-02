import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
};

const initialColorMode = localStorage.getItem("colorMode")
	? localStorage.getItem("colorMode")
	: "#1A97F5";
const initialThemeMode = localStorage.getItem("themeMode")
	? localStorage.getItem("themeMode")
	: "Light";

export const ContextProvider = ({ children }) => {
	const [activeMenu, setActiveMenu] = useState(true);
	const [isClicked, setIsClicked] = useState(initialState);
	const [screenSize, setScreenSize] = useState(undefined);
	const [currentColor, setCurrentColor] = useState(initialColorMode);
	const [currentMode, setCurrentMode] = useState(initialThemeMode);
	const [themeSettings, setThemeSettings] = useState(false);

	const setMode = (e) => {
		setCurrentMode(e.target.value);

		localStorage.setItem("themeMode", e.target.value);

		setThemeSettings(false);
	};

	const setColor = (color) => {
		setCurrentColor(color);

		localStorage.setItem("colorMode", color);

		setThemeSettings(false);
	};

	const handleClick = (clicked) => {
		setIsClicked((prevState) => {
			const updatedState = {};

			for (const key in prevState) {
				updatedState[key] = false;
			}

			updatedState[clicked] = !prevState[clicked];

			return updatedState;
		});
	};

	return (
		<StateContext.Provider
			value={{
				activeMenu,
				setActiveMenu,
				isClicked,
				setIsClicked,
				handleClick,
				screenSize,
				setScreenSize,
				currentColor,
				currentMode,
				themeSettings,
				setThemeSettings,
				setMode,
				setColor,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
