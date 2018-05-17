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
                paymentId: this.hemera.joi.string().required(),

                originatorAddressLine1: this.hemera.joi.string().required(),
                originatorAddressLine2: this.hemera.joi.string().required(),
                originatorAddressLine3: this.hemera.joi.string().required(),

                instructingFIIdCode: this.hemera.joi.string().valid([
                    "B - SWIFT Bank Identifier (BIC)",
                    "C - CHIPS Participant",
                    "D - Demand Deposit Account (DDA) Number",
                    "F - Fed Routing Number",
                    "T - SWIFT (BIC) or BEI and Account Number",
                    "U - CHIPS Identifier"
                    ]).required(),
                instructingFIIdentifier: this.hemera.joi.string().required(),
                instructingFIName: this.hemera.joi.string().required(),
                instructingFIAddressLine1: this.hemera.joi.string().required(),
                instructingFIAddressLine2: this.hemera.joi.string().required(),
                instructingFIAddressLine3: this.hemera.joi.string().required(),

                detailsOfCharges: this.hemera.joi.string().optional(),
                detailsOfChargesCurrency: this.hemera.joi.string().optional(),
                sendersCharge1: this.hemera.joi.number().optional(),
                sendersCharge1Currency: this.hemera.joi.string().optional(),
                sendersCharge2: this.hemera.joi.number().optional(),
                sendersCharge2Currency: this.hemera.joi.string().optional(),
                instructedAmount: this.hemera.joi.number().optional(),
                instructedAmountCurrency: this.hemera.joi.string().optional(),

                FIToFIIntermediaryFIInfo: this.hemera.joi.string().optional(),
                FIToFIBeneficiaryFIInfo: this.hemera.joi.string().optional(),
                FIToFIBeneficiaryInfo: this.hemera.joi.string().optional(),
                FIToFIReceiverFIInfo: this.hemera.joi.string().optional(),
                FIToFIIntermediaryFIAdvice: this.hemera.joi.string().optional(),
                FIToFIIntermediaryFIAdviceOther: this.hemera.joi.string().optional(),
                FIToFIBeneficiaryFIAdvice: this.hemera.joi.string().optional(),
                FIToFIBeneficiaryFIAdviceOther: this.hemera.joi.string().optional(),
                FIToFIBeneficiaryAdvice: this.hemera.joi.string().optional(),
                FIToFIBeneficiaryAdviceOther: this.hemera.joi.string().optional(),
                FIToFIMethodOfPaymentToBeneficiary: this.hemera.joi.string().optional(),
                FIToFIMethodOfPaymentToBeneficiaryAdditionalInfo: this.hemera.joi.string().optional()
            });
    }
}
