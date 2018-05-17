import { NumberSchema } from 'joi';

export interface IPagination {
    limit: NumberSchema;
    offset: NumberSchema;
}
