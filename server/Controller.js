const models = require('./Database');

const Controller = {};

Controller.getAllMeds = async (req, res, next) => {
  try {
    console.log('started middleware - get all meds');
    res.locals.medications = "blah";
    console.log(res.locals.medications);
    return next();
  }
  catch (err) {
    next({
      log: `Controller. :  ERROR ${err}`,
      message: {err: 'Error occurred in Controller. . Check server logs for more details.'}
    });
  }
};

Controller.getSubcategories = async (req, res, next) => {
  try {

    return next();
  }
  catch (err) {
    next({
      log: `Controller. :  ERROR ${err}`,
      message: {err: 'Error occurred in Controller. . Check server logs for more details.'}
    });
  }
};

Controller.getMedications = async (req, res, next) => {
  try {

    return next();
  }
  catch (err) {
    next({
      log: `Controller. :  ERROR ${err}`,
      message: {err: 'Error occurred in Controller. . Check server logs for more details.'}
    });
  }
};

Controller.getMediationClasses = async (req, res, next) => {
  try {
    res.locals = await models.Medication.find({class:'NSAID'}).exec();
    return next();
  }
  catch (err) {
    next({
      log: `Controller. :  ERROR ${err}`,
      message: {err: 'Error occurred in Controller. . Check server logs for more details.'}
    });
  }
};

module.exports = Controller;