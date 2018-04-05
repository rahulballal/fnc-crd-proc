const {
    compose,
    chain
} = require('ramda');
const {
    Failure,
    Success,
    noOp
} = require('./result-system');

/*
* Credit Process is comprised of the the following steps
* Credit Process:
*   - Validate Input Data
*   - Apply business rules
*   - Process How much credit you can get
*   - Respond
* */
const validateInputData = ({firstName, lastName, loanRequested, creditScore}) => {
    console.log('EXECUTED:', 'validateInputData');
    const errors = [];
    if (!(firstName && firstName.length >= 0)) {
        errors.push('Invalid firstName')
    }

    if (!(lastName && lastName.length >= 0)) {
        errors.push('Invalid lastName')
    }

    if (!(loanRequested && Number.isFinite(loanRequested))) {
        errors.push('Invalid loan request amount provided');
    }

    if (!(creditScore && Number.isFinite(creditScore))) {
        errors.push('Invalid credit score provided');
    }

    return errors.length > 0 ? Failure.of(errors) : Success.of({firstName, lastName, loanRequested, creditScore});
};

const applyBusinessRules = ({firstName, lastName, loanRequested, creditScore}) => {
    console.log('EXECUTED:', 'applyBusinessRules');

    const errors = [];
    let factor = 0;
    if (loanRequested >= 10000) {
        errors.push('Loan amount requested can not be greater than 10000');
    }

    if (creditScore && creditScore < 550) {
        errors.push('The credit score is less than 550.');
    }

    if (creditScore > 550 && creditScore < 650) {
        factor = 0.25;
    }

    if (creditScore > 650 && creditScore < 750) {
        factor = 0.45;
    }

    if (creditScore > 750) {
        factor = 0.60;
    }

    return errors.length > 0 ? Failure.of(errors) : Success.of({
        firstName,
        lastName,
        loanRequested,
        creditScore,
        factor
    });
};

const processApplication = ({
                                firstName,
                                lastName,
                                loanRequested,
                                creditScore,
                                factor
                            }) => {
    console.log('EXECUTED:', 'processApplication');

    return Success.of({
        firstName,
        lastName,
        loanRequested,
        creditScore,
        factor, loanApproved: loanRequested + (loanRequested * factor)
    });
};

const generateOutput = ({
                            firstName,
                            lastName,
                            loanRequested,
                            creditScore,
                            factor,
    loanApproved
                        }) => {
    console.log('EXECUTED:', 'generateOutput');

    const finalOutput = {
        request: {
            firstName, lastName, loanRequested, creditScore
        },
        approval: {
            amount: loanApproved
        }
    };
    return Success.of(finalOutput);
};

const main = compose(
    chain(generateOutput),
    chain(processApplication),
    chain(applyBusinessRules),
    validateInputData
);
module.exports = { validateInputData, applyBusinessRules, processApplication, generateOutput, main };