import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

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
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text style={{ fontSize: 20 }}>Wallet App</Text>
		</View>
	);
}

export { App };
