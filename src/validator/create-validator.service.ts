import { Service } from 'justinject';
import { IPaymentAmerbankModel } from '../model/payment-amerbank.model';
import { HemeraService } from '../hemera/hemera.service';

@Service()
export class CreateValidatorService {

    constructor(public hemera: HemeraService) { }

    get schema() {

        return this.hemera.joi.object().required()
            .keys<IPaymentAmerbankModel>(
            {
                name: this.hemera.joi.string().required(),
            });
    }
}
