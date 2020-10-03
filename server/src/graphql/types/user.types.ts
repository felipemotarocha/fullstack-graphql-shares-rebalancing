import { ObjectType, Field, ID } from 'type-graphql';

import Stock from './stock.types';

@ObjectType()
class User {
	@Field((_type) => ID)
	_id: string;

	@Field()
	name: string;

	@Field()
	email: string;

	@Field()
	password: string;

	@Field()
	availableBalance: number;

	@Field()
	investedBalance: number;

	@Field((_type) => [Stock])
	stocks: Stock[];
}

export default User;
