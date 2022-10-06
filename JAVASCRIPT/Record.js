let send = document.getElementById("kirim");
send.onclick = cek;

function showMassage() {
  alert("Terimakasih, untuk permintaanya akan kami proses");
}

let check1 = document.getElementById("inp1");
let check2 = document.getElementById("inp2");
let check3 = document.getElementById("inp3");
let check4 = document.getElementById("inp4");

function cek() {
  switch (check1 & check2 & check3 & check4) {
    case "":
      showMassage;
      break;
    default:
      showMassage;
      break;
  }
}
