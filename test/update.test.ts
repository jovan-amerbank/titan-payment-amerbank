import * as chai from 'chai';
import { Boot } from './boot';
import * as Hemera from 'nats-hemera';

const expect = chai.expect;

const testData: any = {
    paymentId: '5afd8f505546c25915c12a81',

    originatorAddressLine1: 'originator address 1',
    originatorAddressLine2: 'originator address 2',
    originatorAddressLine3: 'originator address 3',

    instructingFIIdCode: 'B - SWIFT Bank Identifier (BIC)',
    instructingFIIdentifier: 'instructing FI Identifier',
    instructingFIName: 'instructing FI Name',
    instructingFIAddressLine1: 'instructing FI Address Line 1',
    instructingFIAddressLine2: 'instructing FI Address Line 2',
    instructingFIAddressLine3: 'instructing FI Address Line 3',

    detailsOfCharges: 'details Of Charges',
    detailsOfChargesCurrency: 'details Of Charges Currency',
    sendersCharge1: 1000,
    sendersCharge1Currency: 'senders Charge 1 Currency',
    sendersCharge2: 1000,
    sendersCharge2Currency: 'senders Charge 2 Currency',
    instructedAmount: 1000,
    instructedAmountCurrency: 'instructed Amount Currency',

    FIToFIIntermediaryFIInfo: 'FI To FI Intermediary FI Info',
    FIToFIBeneficiaryFIInfo: 'FI To FI Beneficiary FI Info',
    FIToFIBeneficiaryInfo: 'FI To FI Beneficiary Info',
    FIToFIReceiverFIInfo: 'FI To FI Receiver FI Info',
    FIToFIIntermediaryFIAdvice: 'FI To FI Intermediary FI Advice',
    FIToFIIntermediaryFIAdviceOther: 'FI To FI Intermediary FI Advice Other',
    FIToFIBeneficiaryFIAdvice: 'FI To FI Beneficiary FI Advice',
    FIToFIBeneficiaryFIAdviceOther: 'FI To FI Beneficiary FI Advice Other',
    FIToFIBeneficiaryAdvice: 'FI To FI Beneficiary Advice',
    FIToFIBeneficiaryAdviceOther: 'FI To FI Beneficiary Advice Other',
    FIToFIMethodOfPaymentToBeneficiary: 'FI To FI Method Of Payment To Beneficiary',
    FIToFIMethodOfPaymentToBeneficiaryAdditionalInfo: 'FI To FI Method Of Payment To Beneficiary Additional Info'
}

let hemera: Hemera;
let entity: any;

describe('Test for updating entity', function () {

    before((done) => {
        const boot = new Boot();
        boot.instance()
            .then((instance: any) => {
                hemera = instance;

                hemera.act({
                    topic: 'payment-amerbank',
                    cmd: 'create',
                    data: testData
                }, (err: any, resp: any) => {
                    entity = resp;
                    done();
                })
            })
            .catch((error: any) => {

                throw error
            })
    });


    after((done) => {
        hemera.close(done);
    })

    it('Validation works', (done) => {
        hemera.act({
            topic: 'payment-amerbank',
            cmd: 'update',
        }, (error: any, resp: any) => {
            expect(error.message).to.be.equals('child "data" fails because ["data" is required]')
        })

        hemera.act({
            topic: 'payment-amerbank',
            cmd: 'update',
            data: {

            }
        }, (error: any, resp: any) => {
            expect(error.message).to.be.equals('child "data" fails because [child "id" fails because ["id" is required]]')
            done();
        })
    });

    it('Update entity', (done) => {
        const updateData = {
            ...entity,
            name: 'Vladimir Djukic',
        };

        hemera.act({
            topic: 'payment-amerbank',
            cmd: 'update',
            data: updateData
        }, (err: any, resp: any) => {
            expect(resp.name).to.be.equals('Vladimir Djukic');
            expect(resp.id).to.exist;
            done();
        })
    });
})
