import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CreditCard, ChartBar, Bell, GearSix } from 'phosphor-react-native';

import theme from '../styles/theme';
import { Settings } from '../screens/Tab/Settings';
import { Carteira } from '../screens/Tab/Carteira';
import { Relatorio } from '../screens/Tab/Relatorio';
import { Notificacao } from '../screens/Tab/Notificacao';

const { Navigator, Screen } = createBottomTabNavigator();

export const TabRoutes = () => {
	return (
		<Navigator
			initialRouteName='Carteira'
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarInactiveTintColor: theme.COLORS.GRAY4,
				tabBarActiveTintColor: theme.COLORS.GRAY1,
				tabBarStyle: {
					paddingBottom: 7,
					backgroundColor: theme.COLORS.PURPLEDARK3,
					borderRadius: 30,
				},
				tabBarLabelStyle: {
					fontSize: 11,
					color: theme.COLORS.WHITE,
				}
			}}
		>
			<Screen
				name='Carteira'
				component={Carteira}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								marginTop: 25,
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							{focused ? (
								<CreditCard
									size={25}
									weight="fill"
									color={theme.COLORS.WHITE}
								/>
							) : (
								<CreditCard
									size={25}
									weight="light"
									color={theme.COLORS.WHITE}
								/>
							)}
						</View>
					)
				}}
			/>
			<Screen
				name='Relatorio'
				component={Relatorio}
				options={{
					tabBarLabel: 'Relatório',
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								marginTop: 25,
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							{focused ? (
								<ChartBar
									size={25}
									weight="fill"
									color={theme.COLORS.WHITE}
								/>
							) : (
								<ChartBar
									size={25}
									weight="light"
									color={theme.COLORS.WHITE}
								/>
							)}
						</View>
					)
				}}
			/>
			<Screen
				name='Notificacao'
				component={Notificacao}
				options={{
					tabBarLabel: 'Notificação',
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								marginTop: 25,
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							{focused ? (
								<Bell
									size={25}
									weight="fill"
									color={theme.COLORS.WHITE}
								/>
							) : (
								<Bell
									size={25}
									weight="light"
									color={theme.COLORS.WHITE}
								/>
							)}
						</View>
					)
				}}
			/>
			<Screen
				name='Settings'
				component={Settings}
				options={{
					tabBarLabel: 'Configuração',
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								marginTop: 25,
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							{focused ? (
								<GearSix
									size={25}
									weight="fill"
									color={theme.COLORS.WHITE}
								/>
							) : (
								<GearSix
									size={25}
									weight="light"
									color={theme.COLORS.WHITE}
								/>
							)}
						</View>
					)
				}}
			/>
		</Navigator>
	)
}
