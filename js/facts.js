function getFacts() {
  let facts;
  $.ajax({
    url: "js/data/quotes.json",
    type: "GET",
    async: false,
    data: {},
    success: (data) => {
      facts = data;
    },
  });
  return facts;
}

const myColor = "#9f34c0";

facts = getFacts();

let r = Math.round(Math.random() * (facts.all.length - 1));
$(".intro p").text(facts.all[r].text);
$(".intro p").append(
  `<br><i class="la la-circle"></i>
  <tiny style="color: #444;">
    ${facts.all[r].user.name.first} ${facts.all[r].user.name.last}
  <tiny>`
);

setInterval(() => {
  r = Math.round(Math.random() * (facts.all.length - 1));
  $(".intro p").text(facts.all[r].text);
  $(".intro p").append(
    `<br><i class="la la-circle"></i>
    <tiny style="color: #444;">
      ${facts.all[r].user.name.first} ${facts.all[r].user.name.last}
    <tiny>`
  );
}, 20000);
