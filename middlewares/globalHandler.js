const globalErrHandler = (err, req, res, next) => {
  //status: failed/something/server error
  //messsage:Actual error that has occured inside our application (Ex- If a user is trying to login with invalid login credentials,we have access to that on the message)
  //stack:Stack represent which file a particular error occurred and which line of code that error occured.
  
  const stack = err.stack;
  const messsage = err.message;
  const status = err.status ? err.status : "failed";
  const statusCode = err.statusCode ? err.statusCode : 500;
  //send response
  res.status(statusCode).json({
    messsage,
    status,
    stack,
  });
};
module.exports = globalErrHandler;
