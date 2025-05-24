import React from "react";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, FlatList } from 'react-native';

import Payments from '@src/assets/export.png';
import Transfer from '@src/assets/convert.png';
import TopUp from '@src/assets/add-circle.png';
import PayOut from '@src/assets/money-send.png';
import EllipseOnePng from '@src/assets/ellipse1.png';
import EllipseTwoPng from '@src/assets/ellipse2.png';
import { Header } from "@src/components/Header/Header";
import { limited_transaction } from "@src/utils/limited_transaction";
import {
	Container,
	CardInfo,
	ViewContainer,
	ViewBalanceLeft,
	ViewBalanceRight,
	TitleValor,
	TitleValoConta,
	TitleCartao,
	TitleNomeCartao,
	Body,
	IconPayment,
	IconTransfer,
	IconPayOut,
	IconTopUp,
	TitleTransfer,
	TitlePayments,
	TitlePayOut,
	TitleTopUp,
	Footer,
	ContentFlat,
	ContentFlatHeader,
	Title,
	ButtonVerTotos,
	ButtonTitleVertotos,
	IconTransaction,
	DetailsTransaction,
	NameTransaction,
	SubtTitleTransaction,
	AmountTransaction,
	EllipseOne,
	EllipseTwo,
} from "./styles";

export const Carteira = () => {
	const navigation = useNavigation();

	const hadleGoTransaction = () => {
		navigation.navigate('Transaction')
	}

	return (
		<Container>
			<Header
				textLeft
				avatarRight
				appName='Minha Carteira'
			/>
			<ViewContainer>
				<CardInfo>
					<EllipseOne source={EllipseOnePng} />
					<ViewBalanceLeft>
						<TitleValor>Valor Total</TitleValor>
						<TitleValoConta>R$ 1.000,00</TitleValoConta>
					</ViewBalanceLeft>

					<ViewBalanceRight>
						<TitleCartao>Cartão</TitleCartao>
						<TitleNomeCartao>Master</TitleNomeCartao>
					</ViewBalanceRight>
					<EllipseTwo source={EllipseTwoPng} />
				</CardInfo>

				<Body>
					<TouchableOpacity style={{ alignItems: 'center' }}>
						<IconTransfer source={Transfer} />
						<TitleTransfer>Transf.</TitleTransfer>
					</TouchableOpacity>
					<TouchableOpacity style={{ alignItems: 'center' }}>
						<IconPayment source={Payments} />
						<TitlePayments>Forma Pagto</TitlePayments>
					</TouchableOpacity>
					<TouchableOpacity style={{ alignItems: 'center' }}>
						<IconPayOut source={PayOut} />
						<TitlePayOut>Pagtos</TitlePayOut>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate('AddCartao')}
						style={{ alignItems: 'center' }}
					>
						<IconTopUp source={TopUp} />
						<TitleTopUp>Novo Cartão</TitleTopUp>
					</TouchableOpacity>
				</Body>
			</ViewContainer>

			<Footer>
				<FlatList
					data={limited_transaction}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<ContentFlat>
							<IconTransaction source={item.icon} />
							<DetailsTransaction>
								<NameTransaction>{item.title}</NameTransaction>
								<SubtTitleTransaction>{item.subtitle}</SubtTitleTransaction>
							</DetailsTransaction>
							<AmountTransaction>{item.amount}</AmountTransaction>
						</ContentFlat>
					)}
				/>
			</Footer>
		</Container>
	)
}
