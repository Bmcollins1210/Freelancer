/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];

const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];

const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function sample(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

function makeFreelancer() {
  const name = sample(NAMES);
  const occupation = sample(OCCUPATIONS);

  const min = PRICE_RANGE.min;
  const max = PRICE_RANGE.max;
  const rate = min + Math.floor(Math.random() * (max - min));

  return { name, occupation, rate };
}

const freelancers = Array.from({ length: NUM_FREELANCERS }, makeFreelancer);

function getAverageRate() {
  let total = 0;

  for (const freelancer of freelancers) {
    total += freelancer.rate;
  }

  return total / freelancers.length;
}

const averageRate = getAverageRate();

function FreelancerRow({ name, occupation, rate }) {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${name}</td>
    <td>${occupation}</td>
    <td>$${rate}</td>
  `;

  return row;
}

function FreelancerRows() {
  const tbody = document.createElement("tbody");

  for (const freelancer of freelancers) {
    tbody.appendChild(FreelancerRow(freelancer));
  }

  return tbody;
}

function AverageRate() {
  const paragraph = document.createElement("p");

  paragraph.textContent = `The average rate is $${averageRate.toFixed(2)}.`;

  return paragraph;
}

function render() {
  const app = document.querySelector("#app");

  app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <div id="averageRate"></div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Occupation</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody id="freelancerRows"></tbody>
    </table>
  `;

  app.querySelector("#averageRate").replaceWith(AverageRate());
  app.querySelector("#freelancerRows").replaceWith(FreelancerRows());
}

render();
