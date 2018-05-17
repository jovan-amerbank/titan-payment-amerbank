import { StringSchema, NumberSchema } from 'nats-hemera';

export interface IPaymentAmerbankModel {
    id?: StringSchema;

    paymentId: StringSchema

    originatorAddressLine1: StringSchema;
    originatorAddressLine2: StringSchema;
    originatorAddressLine3: StringSchema;

    instructingFIIdCode: StringSchema;
    instructingFIIdentifier: StringSchema;
    instructingFIName: StringSchema;
    instructingFIAddressLine1: StringSchema;
    instructingFIAddressLine2: StringSchema;
    instructingFIAddressLine3: StringSchema;

    detailsOfCharges: StringSchema;
    detailsOfChargesCurrency: StringSchema;
    sendersCharge1: NumberSchema;
    sendersCharge1Currency: StringSchema;
    sendersCharge2: NumberSchema;
    sendersCharge2Currency: StringSchema;
    instructedAmount: NumberSchema;
    instructedAmountCurrency: StringSchema;

    FIToFIIntermediaryFIInfo: StringSchema;
    FIToFIBeneficiaryFIInfo: StringSchema;
    FIToFIBeneficiaryInfo: StringSchema;
    FIToFIReceiverFIInfo: StringSchema;
    FIToFIIntermediaryFIAdvice: StringSchema;
    FIToFIIntermediaryFIAdviceOther: StringSchema;
    FIToFIBeneficiaryFIAdvice: StringSchema;
    FIToFIBeneficiaryFIAdviceOther: StringSchema;
    FIToFIBeneficiaryAdvice: StringSchema;
    FIToFIBeneficiaryAdviceOther: StringSchema;
    FIToFIMethodOfPaymentToBeneficiary: StringSchema;
    FIToFIMethodOfPaymentToBeneficiaryAdditionalInfo: StringSchema;

}

export interface ID {
    id: StringSchema;
}
