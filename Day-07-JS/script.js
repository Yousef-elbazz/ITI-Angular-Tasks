 function changeSecondParagraph() {
      document.getElementById("second").innerText = "Changed on Page Load!";
      document.getElementById("pCount").innerText =
        "Total <p> tags: 3 " ;
    }

document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const fname = document.getElementById("firstName").value;
    const lname = document.getElementById("lastName").value;
    alert(`Hello, ${fname} ${lname}!`);
  });

    function displaySelectedFruit() {
      const fruit = document.getElementById("fruitList").value;
      document.getElementById("selectedFruit").innerText = `Selected: ${fruit}`;
    }

    function addFruitOption() {
      const option = new Option("Mango");
      document.getElementById("fruitList").add(option);
    }

    function showGender(gender) {
      document.getElementById("genderResult").innerText = `Selected: ${gender}`;
    }

   function checkSelectedGender() {
  const genderRadios = document.getElementsByName("gender");
  for (let radio of genderRadios) {
    if (radio.checked) {
      alert(`Current selected gender: ${radio.value}`);
      return;
    }
  }
  alert("No gender selected.");
}

    function updateHobbies() {
      const hobbies = document.querySelectorAll(".hobby:checked");
      const list = Array.from(hobbies).map(h => h.value).join(", ");
      document.getElementById("selectedHobbies").innerText = `Hobbies: ${list}`;
    }

    function toggleAll(selectAllCheckbox) {
      const checkboxes = document.querySelectorAll(".hobby");
      checkboxes.forEach(cb => cb.checked = selectAllCheckbox.checked);
      updateHobbies();
    }

    function disableButton(btn) {
      btn.disabled = true;
      btn.innerText = "Disabled";
    }

    function changeText(button) {
      button.innerText = "Clicked By Yousef Elbaz";
    }