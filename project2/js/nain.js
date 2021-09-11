var slider = document.getElementById("range_mony");
var output = document.getElementById("mony_pay");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}