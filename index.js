// Code your solutions in this file
const names = ["Irman", "Maeve", "Leia"];
const event = "Birthday party";

function writeCards(names, event) {
  const messages = [];

  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    messages.push(message);
  }
    return messages
}


function countDown() {
    for (let countDown = 10; countDown >= 0; countDown--) {
        console.log(countDown);
    }
}

countDown();