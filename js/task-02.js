const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ul_list = document.getElementById("ingredients");

const liElements = ingredients.map((ingredient) => {
  const li_element = document.createElement("li");
  li_element.textContent = ingredient;
  li_element.classList.add("item");
  return li_element;
});

ul_list.append(...liElements);