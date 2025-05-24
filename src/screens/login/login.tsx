import type React from 'react';
import { SafeAreaView } from 'react-native';
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
	return (
		<SafeAreaView>
			<Container>
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
					<ButtonPersonalizado
						title="Entrar"
						variant="primary"
						onPress={() => { }}
						style={{ marginBottom: 20 }}
					/>
				</ContentBody>
				<ContentFooter></ContentFooter>
			</Container>
		</SafeAreaView>
	);
}
export { Login };
