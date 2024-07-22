const { ConnectUserModel, SignUpModel, MessagesModel } = require("../../modals");

const createConnectedUser = async ({ data }) => {
  const { from, to, message } = data;
  const firstConnectUser = await ConnectUserModel.findById(from)
  const secondConnectUser = await ConnectUserModel.findById(to)
  const firstUser = await SignUpModel.findById(from)
  const secondUser = await SignUpModel.findById(to)

  const messages = await MessagesModel.findOne({ users: [from, to] })

  let messageId

  if (messages) {
    messages.messages.push(message)

    messageId = (await messages.save())._id
  }
  else {
    const createdMessage = await MessagesModel.create({
      users: [from, to],
      messages: message
    })

    messageId = createdMessage._id
  }

  if (firstConnectUser) {
    const foundConnectedUser = firstConnectUser.connectedUser.id(to)

    if (foundConnectedUser) {
      foundConnectedUser.messages.push({ _id: messageId, ...message })

      await firstConnectUser.save()
    }

    else {
      firstConnectUser.connectedUser.push({
        name: secondUser.name,
        phone: secondUser.phone,
        _id: to,
        messages: { _id: messageId, ...message },
      })

      await firstConnectUser.save()
    }
  }

  if (secondConnectUser) {
    const foundConnectedUser = secondConnectUser.connectedUser.id(from)

    if (foundConnectedUser) {
      foundConnectedUser.messages.push({ _id: messageId, ...message })
      foundConnectedUser.newMessages.push({ _id: messageId, ...message })

      await secondConnectUser.save()
    }
    else {
      secondConnectUser.connectedUser.push({
        name: firstUser.name,
        phone: firstUser.phone,
        _id: from,
        messages: { _id: messageId, ...message },
        newMessages: { _id: messageId, ...message }
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
      messages: { _id: messageId, ...message },
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
      messages: { _id: messageId, ...message },
      newMessages: { _id: messageId, ...message }
    })

    await secondNewuser.save()

  }

  return
}

module.exports = createConnectedUser;
