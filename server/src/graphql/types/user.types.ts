import { ObjectType, Field, ID } from 'type-graphql';

import Stock from './stock.types';

@ObjectType()
class User {
	@Field((_type) => ID)
	id: string;

	@Field()
	name: string;

	@Field()
	email: string;

	@Field()
	password: string;

	@Field((_type) => [Stock])
	stocks: Stock[];
}

export default User;
