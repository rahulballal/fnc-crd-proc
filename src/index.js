const { success, isSuccess, failure, isFailure } = require('./result-system');

const gatherCreditProcessPrereq = ({ loanAmount, isFirstHomeBuyer }) => { console.log({ loanAmount, isFirstHomeBuyer }); };
const applyCreditProcess = (data) => { console.log(data); };
const createOutput = (data) => { console.log(data); };

module.exports = ({
  loanAmount,
  isFirstHomeBuyer
}) => createOutput(
          applyCreditProcess(
            gatherCreditProcessPrereq({ loanAmount, isFirstHomeBuyer })));
