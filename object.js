class FamMembers {
  constructor(name, age, job, isSingle) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.isSingle = isSingle;
  }

  displayMemberInfo() {
    return (
      this.name +
      " is a " +
      this.age +
      " years old! " +
      this.job +
      " But he is " +
      this.isSingle
    );
  }

  remindMemberAge() {
    return (
      "Hi " +
      this.name +
      " This is a friendly reminder that you are " +
      this.age +
      " years old! Now"
    );
  }
}

let jaden = new FamMembers("Mike Will", 15, "Dev", false);
let smith = new FamMembers("Willy", 45, "Doctor", true);

console.log(jaden.remindMemberAge());
console.log(jaden);
console.log(smith);

let classMates = [
  {
    Name: "Zack",
    Email: "zack@agmail.com",
    Address: "28 King st, Ottawa Ontario. k1k 1z4",
    Phone: 4132778072,
  },
  {
    Name: "Dieudonne",
    Email: "ntak0001@algonquinlive.com",
    Address: "28 MacBread st, Ottawa Ontario. k1y 4T8",
    Phone: 414882902,
  },
  {
    Name: "Anifa",
    Email: "anifa@gmail.com",
    Address: "28 Rideu st, Ottawa Ontario. k1z 2y4",
    Phone: 8198890217,
  },
];

let classMatesList = document.getElementById("list");
let addForm = document.getElementById("addForm");
let addNewBtn = document.getElementById("addNewBtn");

const displayClassMates = (classMates) => {
  let output = "";

  classMates.forEach(({ Name, Email, Address, Phone }, index) => {
    output += `
      <div class="card">
          <div><strong>Name:</strong> <span>${Name}</span></div>
          <div><strong>Email:</strong> <span>${Email}</div>
          <div><strong>Address:</strong> <span>${Address}</div>
          <div><strong>Phone:</strong> <span>${Phone}</div>
      </div>
      `;

    // Add a line between objects except for the last object
    if (index < classMates.length - 1) {
      output += "<hr><br/>";
    }
  });

  classMatesList.innerHTML = output;
};

displayClassMates(classMates);

const sortByCategory = (field, reverse, primer) => {
  const key = primer ? (x) => primer(x[field]) : (x) => x[field];

  reverse = !reverse ? 1 : -1;

  return (a, b) => reverse * (key(a) > key(b) ? 1 : -1);
};

function ascending() {
  let sortedAsc = classMates.sort(
    sortByCategory("Name", false, (a) => a.toUpperCase())
  );
  displayClassMates(sortedAsc);
}

function descending() {
  window.location.reload();
  displayClassMates(classMates);
}

function filterByName() {
  const filterInput = document.getElementById("filterInput");
  const filterValue = filterInput.value.toLowerCase();

  const filteredClassMates = classMates.filter((classMate) => {
    return classMate.Name.toLowerCase().includes(filterValue);
  });

  displayClassMates(filteredClassMates);
}

function clearFilter() {
  const filterInput = document.getElementById("filterInput");
  filterInput.value = "";

  displayClassMates(classMates);
}

function toggleAddForm() {
  addForm.style.display = addForm.style.display === "none" ? "block" : "none";
}

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const addressInput = document.getElementById("address");
  const phoneInput = document.getElementById("phone");

  const newName = nameInput.value.trim();
  const newEmail = emailInput.value.trim();
  const newAddress = addressInput.value.trim();
  const newPhone = phoneInput.value.trim();

  if (newName && newEmail && newAddress && newPhone) {
    const newClassMate = {
      Name: newName,
      Email: newEmail,
      Address: newAddress,
      Phone: newPhone,
    };

    classMates.push(newClassMate);

    displayClassMates(classMates);

    // Reset form fields
    nameInput.value = "";
    emailInput.value = "";
    addressInput.value = "";
    phoneInput.value = "";

    toggleAddForm();
  }
});
