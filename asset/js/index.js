const OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cbbd98484amsh4dccc46f5f95695p19603djsn97dbb2fbff0b",
    "X-RapidAPI-Host": "ip-geolocation-ipwhois-io.p.rapidapi.com",
  },
};
const fetchIpInfo = (ip) => {
  return fetch(`https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/?ip=${ip}`,OPTIONS)
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const $ = (selector) => document.querySelector(selector);

const $form = $("#form");
const $inputIP = $("#inputIP");
const $submit = $("#submit");
const $results = $("#results");

$form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const { value } = $inputIP;
  if (!value) return;

  $submit.setAttribute("disabled", "");
  $submit.setAttribute("aria-busy", "true");

  const ipInfo = await fetchIpInfo(value);

  if (ipInfo) {
    $results.innerHTML = JSON.stringify(ipInfo, null, 2);
  }

  $submit.removeAttribute("disabled");
  $submit.removeAttribute("aria-busy");
});
