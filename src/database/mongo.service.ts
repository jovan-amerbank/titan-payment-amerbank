import { Service } from 'justinject';
import * as replaceOnce from 'replace-once';
export const DB_NAME: string = 'titan-payment-amerbank-db';
export const STORE: string = `mongo-store.${DB_NAME}`;
export const COLLECTION: string = 'payment-amerbank';

@Service()
export class MongoService {
    public mongoHost: any;

    public connectionString(): string {
        const str: any = process.env.TITAN_MONGO_CLUSTER;

        const find = ['PASSWORD', 'USERNAME', 'DATABASE'];
        const replace = [process.env.TITAN_MONGO_CLUSTER_PASSWORD, process.env.TITAN_MONGO_CLUSTER_USER, DB_NAME];

        this.mongoHost = replaceOnce(str, find, replace, 'gi');

        return this.mongoHost;
    }
}
