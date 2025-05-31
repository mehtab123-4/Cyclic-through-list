const messages = [
  "Hello, welcome to our site!",
  "Hope you're having a great day!",
  "Don't forget to smile :)",
  "Stay positive and strong!",
  "Keep learning, keep growing!",
  "Thanks for stopping by!"
];

let index = 0;

document.getElementById("cycleBtn").addEventListener("click", function () {
  const messageElement = document.getElementById("message");
  messageElement.textContent = messages[index];
  index = (index + 1) % messages.length;
});
