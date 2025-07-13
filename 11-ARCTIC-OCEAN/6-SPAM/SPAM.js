function spamDetector(element, i, arr) {
  for (let key in element) {
    const current = element[key].toLowerCase();

    if (
      current.includes("coffee") ||
      current.includes("bug") ||
      current.includes("deadline")
    ) {
      element.spam = true;

      break;
    }
  }
}

for (let i = 0; i < inbox.length; i++) {
  spamDetector(inbox[i], i, inbox);
}
