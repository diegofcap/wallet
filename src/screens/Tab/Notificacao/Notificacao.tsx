import React from "react";
import { View, Text } from "react-native";

export const Notificacao = () => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }
		}>
			<Text style={{ fontSize: 24, fontWeight: 'bold' }}> Notificação Screen </Text>
			< Text style={{ fontSize: 16, color: 'gray' }}> This is the notificação screen.</Text>
		</View>
	)
}
