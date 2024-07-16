const { SignUpModel } = require("../../modals");

const handleUpdateStatus = async ({ data }) => {

  const {id, status} = data

  try {
    const user = await SignUpModel.findByIdAndUpdate(id, {
      status: status
    }, {
      returnDocument: "after"
    });

    return user
  } catch (err) {
    return err
  }
};

module.exports = handleUpdateStatus;
