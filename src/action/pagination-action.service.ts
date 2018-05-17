import { STORE, COLLECTION } from '../database';
import { Service, Action } from 'justinject';
import { HemeraService } from '../hemera/hemera.service';
import { OffsetValidatorService} from '../validator/offset-validator.service';
import { mongoResponse } from '../helper/mongo-response.helper';

export interface IAction {
    topic: string;
    cmd: string;
}

@Service()
export class PaginationActionService {
    constructor(public hemera: HemeraService, public validator: OffsetValidatorService) { }

    @Action({
        topic: 'payment-amerbank',
        cmd: 'pagination',
    })
    public paginationAction(msg?: any, done?: any) {
        this.hemera.instance.act({
            topic: STORE,
            cmd: 'find',
            collection: COLLECTION,
            query: {},
            options: {
                limit: 10,
                offset: msg.data.offset * 10
            }
        }, (err: any, response: any) => {
            /* istanbul ignore if  */
            if (err) {
                return done(err);
            }

            const merged = mongoResponse(response);

            return done(null, merged);
        });

    }
}
