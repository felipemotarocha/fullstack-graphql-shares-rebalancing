import * as React from 'react';
import { useContext } from 'react';
import { CheckOutlined, EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import { UserContext } from '../../contexts/user.context';
import { Container, Content, Headline } from './stocks.styles';

import StockItem from '../stock-item/stock-item.component';
import { default as AddStock } from '../add-stock/add-stock.container';

const Stocks: React.FunctionComponent = () => {
	const { currentUser, editableStocks, setEditableStocks } = useContext(
		UserContext
	);

	const handleToggleEditableStocks = () => {
		setEditableStocks!(!editableStocks);
	};

	return (
		<Container>
			<Headline>
				<p>Stocks</p>
				<AddStock />
				<Button
					size='large'
					type='primary'
					icon={editableStocks ? <CheckOutlined /> : <EditOutlined />}
					onClick={handleToggleEditableStocks}
				>
					{editableStocks ? 'Done' : 'Edit'}
				</Button>
			</Headline>
			<Content>
				{currentUser
					? currentUser!.stocks.map((stock) => (
							<StockItem
								key={stock.id}
								stock={stock}
								editableStocks={editableStocks}
							/>
					  ))
					: null}
			</Content>
		</Container>
	);
};

export default Stocks;
