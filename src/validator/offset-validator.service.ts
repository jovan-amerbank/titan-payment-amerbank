import { Service } from 'justinject';
import { IPagination } from '../model/pagination';
import { HemeraService } from '../hemera/hemera.service';

@Service()
export class OffsetValidatorService {

    constructor(public hemera: HemeraService) { }

    get schema() {

        return this.hemera.joi.object().required()
            .keys<IPagination>(
            {
                offset: this.hemera.joi.number().required(),
                limit: this.hemera.joi.number().optional()
            });
    }
}
