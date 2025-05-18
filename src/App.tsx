import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import {
	useFonts,
	Poppins_300Light,
	Poppins_400Regular,
	Poppins_500Medium,
	Poppins_700Bold,
	Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";

import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";
import theme from "../src/styles/theme";

const App = () => {
	const [fontsLoaded] = useFonts({
		Poppins_300Light,
		Poppins_400Regular,
		Poppins_500Medium,
		Poppins_700Bold,
		Poppins_800ExtraBold,
		DMSans_400Regular,
		DMSerifDisplay_400Regular,
	});

	if (!fontsLoaded) {
		return <ActivityIndicator />;
	}

	return (
		<ThemeProvider theme={theme}>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text style={{ fontSize: 20 }}>Wallet App!</Text>
			</View>
		</ThemeProvider>
	);
}

export { App };
