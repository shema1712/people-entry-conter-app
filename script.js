var saveRef = document.getElementById("save-el");
var countRef = document.getElementById("count");
var count = 0;
function increament() {
  count += 1;

  countRef.textContent = count;
}
function save() {
  var countStr = count + " -";
  saveRef.textContent += countStr;
  countRef.textContent = 0;
}
save();
