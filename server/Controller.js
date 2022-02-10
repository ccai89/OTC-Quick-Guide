const models = require("./Database");

const Controller = {};

Controller.getAllergiesCI = async (req, res, next) => {
	try {
		res.locals.allergyCI = await models.Medication.find({});
		return next();
	} catch (err) {
		next({
			log: `Controller.getAllergiesCI :  ERROR ${err}`,
			message: {
				err: "Error occurred in Controller.getAllergiesCI . Check server logs for more details.",
			},
		});
	}
};

Controller.getPain = async (req, res, next) => {
	try {
		res.locals.pain = await models.Medication.find({ ailment: "Pain" });
		return next();
	} catch (err) {
		next({
			log: `Controller.getPain :  ERROR ${err}`,
			message: {
				err: "Error occurred in Controller.getPain . Check server logs for more details.",
			},
		});
	}
};

Controller.getTummy = async (req, res, next) => {
	try {
		res.locals.tummy = await models.Medication.find({ ailment: "Tummy" });
		return next();
	} catch (err) {
		next({
			log: `Controller.getTummy :  ERROR ${err}`,
			message: {
				err: "Error occurred in Controller.getTummy . Check server logs for more details.",
			},
		});
	}
};

Controller.getRash = async (req, res, next) => {
	try {
		res.locals.rash = await models.Medication.find({ ailment: "Rash" });
		return next();
	} catch (err) {
		next({
			log: `Controller.getRash :  ERROR ${err}`,
			message: {
				err: "Error occurred in Controller.getRash . Check server logs for more details.",
			},
		});
	}
};

Controller.getAllergy = async (req, res, next) => {
	try {
		res.locals.allery = await models.Medication.find({ ailment: "Allergy" });
		return next();
	} catch (err) {
		next({
			log: `Controller.getAllergy :  ERROR ${err}`,
			message: {
				err: "Error occurred in Controller.getAllergy . Check server logs for more details.",
			},
		});
	}
};

Controller.getCough = async (req, res, next) => {
	try {
		res.locals.cough = await models.Medication.find({ ailment: "Cough" });
		return next();
	} catch (err) {
		next({
			log: `Controller.getCough :  ERROR ${err}`,
			message: {
				err: "Error occurred in Controller.getCough . Check server logs for more details.",
			},
		});
	}
};

Controller.getZZZ = async (req, res, next) => {
	try {
		res.locals.zzz = await models.Medication.find({ ailment: "ZZZ" });
		return next();
	} catch (err) {
		next({
			log: `Controller.getZZZ :  ERROR ${err}`,
			message: {
				err: "Error occurred in Controller.getZZZ . Check server logs for more details.",
			},
		});
	}
};

Controller.getEye = async (req, res, next) => {
	try {
		res.locals.eye = await models.Medication.find({ ailment: "Eye" });
		return next();
	} catch (err) {
		next({
			log: `Controller.getEye :  ERROR ${err}`,
			message: {
				err: "Error occurred in Controller.getEye . Check server logs for more details.",
			},
		});
	}
};

Controller.getOuchie = async (req, res, next) => {
	try {
		res.locals.ouchie = await models.Medication.find({ ailment: "Ouchie" });
		return next();
	} catch (err) {
		next({
			log: `Controller.getOuchie :  ERROR ${err}`,
			message: {
				err: "Error occurred in Controller.getOuchie . Check server logs for more details.",
			},
		});
	}
};

module.exports = Controller;
