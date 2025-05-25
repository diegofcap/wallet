import React from 'react';
import { View, Text } from 'react-native';

import { GoBack } from '@src/components/GoBack';
import detailsCardPng from '@src/assets/carddetails.png';
import { ButtonPersonalizado } from '@src/components/ButtonPersonalizado';
import {
	Container,
	Title,
	CardImage,
	Name,
	Banco,
	Conta,
	Status,
	Validade,
	ViewInfo,
	InfoTitle,
	ViewDetails,
} from './styles';

export const DetailsCard = () => {
	return (
		<>
			<GoBack />
			<Container>
				<Title>Detalhes do Cartão</Title>

				<CardImage
					source={detailsCardPng}
				/>

				<ViewDetails>
					<ViewInfo>
						<InfoTitle>Nome</InfoTitle>
						<Name>Diego Ferreira</Name>
					</ViewInfo>
					<ViewInfo>
						<InfoTitle>Banco</InfoTitle>
						<Banco>Inter Empresas</Banco>
					</ViewInfo>
					<ViewInfo>
						<InfoTitle>Conta</InfoTitle>
						<Conta>000934-2</Conta>
					</ViewInfo>
					<ViewInfo>
						<InfoTitle>Status</InfoTitle>
						<Status>Ativo</Status>
					</ViewInfo>
					<ViewInfo>
						<InfoTitle>Vencimento</InfoTitle>
						<Validade>03-2030</Validade>
					</ViewInfo>
					<ViewInfo>
						<InfoTitle>CCV</InfoTitle>
						<Validade>030</Validade>
					</ViewInfo>
				</ViewDetails>

				<ButtonPersonalizado
					variant='transparent'
					title='Deletar Cartão'
					onPress={() => { }}

					style={{
						marginTop: 30,
					}}
				/>
			</Container>
		</>
	)
}
