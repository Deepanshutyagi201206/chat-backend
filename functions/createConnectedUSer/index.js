const { ConnectUserModel, SignUpModel } = require("../../modals");

const createConnectedUser = async ({ data }) => {
  const { from, to, message } = data;
  const firstConnectUser = await ConnectUserModel.findById(from)
  const secondConnectUser = await ConnectUserModel.findById(to)
  const firstUser = await SignUpModel.findById(from)
  const secondUser = await SignUpModel.findById(to)

  if (firstConnectUser) {
    const foundConnectedUser = firstConnectUser.connectedUser.id(to)

    if (foundConnectedUser) {
      foundConnectedUser.messages.push(message)

      await firstConnectUser.save()
    }
    else {
      firstConnectUser.connectedUser.push({
        name: secondUser.name,
        phone: secondUser.phone,
        _id: to,
        messages: message
      })

      await firstConnectUser.save()
    }
  }

  if (secondConnectUser) {
    const foundConnectedUser = secondConnectUser.connectedUser.id(from)

    if (foundConnectedUser) {
      foundConnectedUser.messages.push(message)

      await secondConnectUser.save()
    }
    else {
      secondConnectUser.connectedUser.push({
        name: firstUser.name,
        phone: firstUser.phone,
        _id: from,
        messages: message
      })

      await secondConnectUser.save()
    }
  }
  if (!firstConnectUser) {
    const firstNewuser = new ConnectUserModel({
      _id: from
    })

    firstNewuser.connectedUser.push({
      name: secondUser.name,
      phone: secondUser.phone,
      _id: to,
      messages: message
    })

    await firstNewuser.save()

  }
  if (!secondConnectUser) {

    const secondNewuser = new ConnectUserModel({
      _id: to
    })

    secondNewuser.connectedUser.push({
      name: firstUser.name,
      phone: firstUser.phone,
      _id: from,
      messages: message
    })
    await secondNewuser.save()

  }

  return
}

module.exports = createConnectedUser;
