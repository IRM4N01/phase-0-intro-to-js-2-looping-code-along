// Code your solutions in this file
const names = []
const event = ""


function writeCards(names, event) {
  const messages = [];

  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    messages.push(message)
    debugger;
  }

  return messages;
}

console.log(writeCards(["Mako", "Iroh", "Goku"], "Graduation"));

function countDown() {
  for (let countDown = 10; countDown >= 0; countDown--) {
    console.log(countDown);
  }
}

countDown();