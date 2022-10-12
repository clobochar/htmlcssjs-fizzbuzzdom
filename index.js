const ul = document.querySelector("ul.card-list");
const card = document.querySelector("li.card");

for (let index = 1; index <= 100; index++) {
  let card_class = "card";
  let card_text = index;

  if (index % 3 == 0) {
    card_class += " fizz";
    card_text = "Fizz";
  }

  if (index % 5 == 0) {
    card_class += " buzz";
    card_text = "Buzz";
  }

  const card = `<li class="${card_class}">${card_text}</li>`;
  ul.innerHTML += card;
}
