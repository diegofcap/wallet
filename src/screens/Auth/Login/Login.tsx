import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonSocialGoogle } from '@src/components/ButtonSocialGoogle/ButtonSocialGoogle';
import { ButtonSocial } from '@src/components/ButtonSocial/ButtonSocial';
import Input from '@src/components/Input';
import {
	Container,
	ContentHeader,
	ContentBody,
	ContentFooter,
	Title,
	Description,
	ViewButton,
	ButtonSignUp,
	TitleButtonSignUp1,
	TitleButtonSingUp2,
	ContentForgotPassword,
	ContentButtonForgotPassword,
	ContentTitleForgotPassword,
} from "./styles";
import { ButtonPersonalizado } from '@src/components/ButtonPersonalizado';


const Login: React.FC = () => {
	const [loading, setLoading] = useState(false);
	const navigation = useNavigation();



	const handleCadastro = () => {
		navigation.navigate('Cadastro');
	}

	const handleRecuperarSenha = () => {
		navigation.navigate('RecuperarSenha');
	}

	return (
		// <KeyboardAvoidingView
		//     behavior="position"
		//     enabled
		// >
		<Container>
			<ScrollView showsVerticalScrollIndicator={false}>
				<ContentHeader>
					<Title> Seja bem vindo(a) {"\n"} a App Carteira</Title>
					<Description>Entrar com rede sociais</Description>
					<ViewButton>
						<ButtonSocialGoogle title="Google" />
						<ButtonSocial iconName="facebook" title="Facebook" />
					</ViewButton>
				</ContentHeader>
				<ContentBody>
					<Input
						LeftIcon
						iconSize={25}
						autoCorrect={false}
						autoCapitalize="none"
						secureTextEntry={false}
						iconName="mail-outline"
						keyboardType="email-address"
						placeholder="Digite seu e-mail"
					/>
					<Input
						LeftIcon
						RightIcon
						iconSize={25}
						secureTextEntry
						autoCorrect={false}
						autoCapitalize='none'
						keyboardType="default"
						iconName="lock-closed-outline"
						placeholder="Digite sua senha"
					/>
					<ContentForgotPassword>
						<ContentButtonForgotPassword onPress={handleRecuperarSenha}>
							<ContentTitleForgotPassword>Recuperar Senha</ContentTitleForgotPassword>
						</ContentButtonForgotPassword>
					</ContentForgotPassword>
					<ButtonPersonalizado
						title="Entrar"
						variant="primary"
						onPress={() => { }}
						style={{ marginBottom: 20 }}
					/>


					<ContentFooter>
						<ButtonSignUp onPress={handleCadastro}>
							<TitleButtonSignUp1>Não tem cadastro ainda?</TitleButtonSignUp1>
							<TitleButtonSingUp2>Cadastre-se</TitleButtonSingUp2>
						</ButtonSignUp>
					</ContentFooter>
				</ContentBody>
			</ScrollView>
		</Container>
		// </KeyboardAvoidingView>
	);
}
export { Login };
