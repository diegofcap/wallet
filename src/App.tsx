import React from 'react';
import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';

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

import { Login } from './screens/login/login';
import theme from '../src/styles/theme';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
		return <ActivityIndicator size="large" style={{ flex: 1 }} />;
	}

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<ThemeProvider theme={theme}>
				<StatusBar style="dark" translucent backgroundColor="transparent" />
				<Login />
			</ThemeProvider>
		</GestureHandlerRootView>
	);
}

export { App };
