import { StringSchema } from 'nats-hemera';

export interface IPaymentAmerbankModel {
    id?: StringSchema;
    name: StringSchema;
}

export interface ID {
    id: StringSchema;
}
