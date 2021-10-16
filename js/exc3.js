



const selectedValue = document.getElementById("list");
selectedValue.addEventListener("change", getSelectedValue);

console.log(selectedValue);

function getSelectedValue() {
 let selectedOption= selectedValue.value;
  console.log(selectedOption);
}
getSelectedValue();
