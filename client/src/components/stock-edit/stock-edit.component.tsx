import * as React from 'react';
import { Button } from 'antd';
import { CloseOutlined, DeleteOutlined, SaveOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';

import {
	Buttons,
	Container,
	Field,
	Fields,
	Title,
	GlobalStyle,
} from './stock-edit.styles';

import {
	CustomInput,
	CustomNumberInput,
} from '../custom-input/custom-input.component';

export interface StockEditProps {
	symbol: string;
	quantity: number;
	score: number;
	handleQuantityChange: (value: string | number | undefined) => void;
	handleScoreChange: (value: string | number | undefined) => void;
	resetInputs: () => void;
	handleConfirmDelete: () => void;
	handleSaveChanges: () => void;
}

const StockEdit: React.FunctionComponent<StockEditProps> = ({
	symbol,
	quantity,
	score,
	handleQuantityChange,
	handleScoreChange,
	handleConfirmDelete,
	handleSaveChanges,
	resetInputs,
}) => {
	return (
		<Container>
			<GlobalStyle />
			<Fields>
				<Field>
					<Title>Symbol</Title>
					<CustomInput readOnly value={symbol} />
				</Field>
				<Field>
					<Title>Quantity</Title>
					<CustomNumberInput
						size='large'
						width='100%'
						value={quantity}
						onChange={handleQuantityChange}
					/>
				</Field>
				<Field>
					<Title>Score</Title>
					<CustomNumberInput
						size='large'
						width='100%'
						min={1}
						max={10}
						value={score}
						onChange={handleScoreChange}
					/>
				</Field>
			</Fields>
			<Buttons>
				<Button
					type='primary'
					size='large'
					icon={<SaveOutlined />}
					onClick={handleSaveChanges}
				>
					Save changes
				</Button>
				<Button
					type='default'
					size='large'
					icon={<CloseOutlined />}
					onClick={resetInputs}
				>
					Discard changes
				</Button>

				<Popconfirm
					placement='topRight'
					title='Are you sure you want to delete this stock from your portfolio?'
					okText='Yes'
					cancelText='No'
					className='popconfirm'
					onConfirm={handleConfirmDelete}
				>
					<Button
						type='default'
						size='large'
						icon={<DeleteOutlined />}
					>
						Delete
					</Button>
				</Popconfirm>
			</Buttons>
		</Container>
	);
};

export default StockEdit;
