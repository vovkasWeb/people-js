/** @format */

const map = ["_id", "name", "isActive", "balance"];
const users = [
  {
    _id: "5d220b10e8265cc978e2586b",
    isActive: true,
    balance: 2853.33,
    age: 20,
    name: "Buckner Osborne",
    gender: "male",
    company: "EMPIRICA",
    email: "bucknerosborne@empirica.com",
    phone: "+1 (850) 411-2997",
    registered: "2018-08-13T04:28:45 -03:00",
    nestedField: { total: 300 },
  },
  {
    _id: "5d220b10144ef972f6c2b332",
    isActive: true,
    balance: 1464.63,
    age: 38,
    name: "Rosalie Smith",
    gender: "female",
    company: "KATAKANA",
    email: "rosaliesmith@katakana.com",
    phone: "+1 (943) 463-2496",
    registered: "2016-12-09T05:15:34 -02:00",
    nestedField: { total: 400 },
  },
  {
    _id: "5d220b1083a0494655cdecf6",
    isActive: false,
    balance: 2823.39,
    age: 40,
    name: "Estrada Davenport",
    gender: "male",
    company: "EBIDCO",
    email: "estradadavenport@ebidco.com",
    phone: "+1 (890) 461-2088",
    registered: "2016-03-04T03:36:38 -02:00",
    nestedField: { total: 200 },
  },
];
const thead = document.querySelector("thead");
const tbody = document.querySelector("tbody");
 const totalBalans = document.querySelector('.total-balans');
var id = 1;
// functionSort(users, "age", "asc");
withdrawHtml(users, map);

function withdrawHtml(arr, map) {
  if (
    !Array.isArray(arr) ||
    arr.length == 0 ||
    !Array.isArray(map) ||
    map.length == 0
  )
    return;

  const newArr = newArrayObj(arr, map);
  const fragment = document.createDocumentFragment();
  const fragmentStr = document.createDocumentFragment();
  totalBalans.textContent+=totalBalance(arr);

  fragmentStr.appendChild(createTrCol(map));

  newArr.forEach((element) => {
    fragmentStr.appendChild(createTr(element));
  });
  tbody.appendChild(fragmentStr);
  return;
}
function createTrCol(arr) {
  const tr = document.createElement("tr");
  const idTh = document.createElement("th");
  idTh.textContent = "#";
  idTh.setAttribute("scope", "cop");
  tr.appendChild(idTh);

  for (let i = 1; i < arr.length; i++) {
    const th = document.createElement("th");
    th.textContent = arr[i];
    th.setAttribute("scope", "cop");
    tr.appendChild(th);
  }
  return tr;
}
function totalBalance(arr) {
	return arr.reduce(function(sum, current) {
		return sum + current.balance;
	 }, 0);
}

function createTr(element) {
  const tr = document.createElement("tr");
  const idTh = document.createElement("th");
  idTh.textContent = id;
  tr.appendChild(idTh);
  for (var key in element) {
    if (key === "_id") continue;
    const th = document.createElement("th");
    th.textContent = element[key];
    tr.appendChild(th);
  }
  id++;

  return tr;
}

function newArrayObj(arr, map) {
  const res = arr.map((user) =>
    map.reduce((a, e) => {
      a[e] = user[e];
      return a;
    }, {})
  );
  return res;
}
function functionSort(arr, parameter, typeOf) {
  if (!Array.isArray(arr) || arr.length == 0 || !parameter || !typeOf) return;
  if (typeOf == "desc")
    console.log(arr.sort((a, b) => (a[parameter] < b[parameter] ? 1 : -1)));
  else if (typeOf == "asc")
    console.log(arr.sort((a, b) => (a[parameter] > b[parameter] ? 1 : -1)));
}
