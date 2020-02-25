'use strict';
let { failure, success, parameterValue } = require('../../libs/helper');
let ImageModel = require('../../libs/models/image.model');

module.exports.handler = async (event, context, callback) => {

  console.log(event);

  let id = parameterValue(event, "id");

  try {
    let result = await ImageModel.query({ roboRoverId: id }).descending().limit(10).exec();
    console.log(result);
    return callback(null, success(result));

  } catch (e) {
    console.log(e);
    return callback(null, failure(e));
  }

};
