let send = document.getElementById("kirim");
send.onclick = showMassage;

function showMassage() {
  alert("Terimakasih, untuk permintaanya akan kami proses");
}

let check1 = document.getElementById("inp1");
let check2 = document.getElementById("inp2");
let check3 = document.getElementById("inp3");
let check4 = document.getElementById("inp4");
function cek() {
  if ((check1 = "")) {
    showMassage;
  } else if ((check2 = "")) {
  } else if ((check3 = "")) {
  } else if ((check4 = "")) {
  } else {
    showMassage;
  }
}
