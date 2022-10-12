const ul = document.querySelector("ul.card-list");

for (let index = 1; index <= 100; index++) {
  const card = document.createElement("li");
  card.classList.add("card");

  let card_text = index;

  if (index % 3 == 0) {
    card.classList.add("fizz");
    card_text = "Fizz";
  }

  if (index % 5 == 0) {
    card.classList.add("buzz");
    card_text = "Buzz";
  }

  if (index % 3 == 0 && index % 15 == 0) {
    card.classList.add("fizzbuzz");
    card_text = "Fizzbuzz";
  }

  card.appendChild(document.createTextNode(card_text));
  ul.appendChild(card);
}
