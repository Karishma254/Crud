const bookidgen = require("bookidgen");
const { time } = require("console");
const moment = require("moment");
const schema = require("../schema");

//  POST API

const post = async (req, res) => {
  let {
    time,
    Date,
  } = req.body;
  try {
    if (!time || !Date) {
      res.json({ message: "Enter All Data, ", status: false });
    } else {
    //   let planId = bookidgen("PlanId", 14522, 199585);
      const Plans = await schema.create({
        time,
        Date,
      });
      if (!Plans) {
        res.json({
          message: "SOME ISSUEs  ARE THERE WHILE CREATING DATA",
          status: false,
        });
      } else {
        res.json({
          message: "DATA CREATED SUCCESSFULLY",
          data: Plans,
          status: true,
        });
      }
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
      status: false,
    });
  }
};

module.exports = { post };
