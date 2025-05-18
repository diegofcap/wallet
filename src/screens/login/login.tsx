import type React from 'react';
import { SafeAreaView } from 'react-native';
import { Container, ContentBody, ContentFooter, ContentHeader, Description, Title, ViewButton } from './styles';

const Login: React.FC = () => {
	return (
		<SafeAreaView>
			<Container>
				<ContentHeader>
					<Title> Seja bem vindo(a) {"\n"} a App Carteira</Title>
					<Description>Entrar com rede sociais</Description>
					<ViewButton></ViewButton>
				</ContentHeader>
				<ContentBody></ContentBody>
				<ContentFooter></ContentFooter>
			</Container>
		</SafeAreaView>
	);
}
export { Login };
