let send = document.getElementById("kirim");
send.onclick = ceko;

function showMassage() {
  alert("Terimakasih, untuk permintaanya akan kami proses");
}

//  cek input
let check1 = document.getElementById("inp1");
let check2 = document.getElementById("inp2");
let check3 = document.getElementById("inp3");
let check4 = document.getElementById("inp4");

let ceko = () => {
  switch (check1 & check2 & check3 & check4) {
    case "":
      break;
    default:
      showMassage;
      break;
  }
};
