let send = document.getElementById("kirim");
send.onclick = showMassage;

//  cek input

function showMassage() {
  let check1 = document.getElementById("inp1").value;
  let check2 = document.getElementById("inp2").value;
  let check3 = document.getElementById("inp3").value;
  let check4 = document.getElementById("inp4").value;
  if (check1 != "" && check2 != "" && check3 != "" && check4 != "") {
    alert("Terimakasih Permintaan anda akan kami Proses");
    return true;
  } else {
    alert("Mohon Isi Dahulu dan Lengkapi");
  }
}

let reset = document.getElementById("reset");
reset.onclick = clear;
function clear() {
  let check5 = (document.getElementById("inp1").value = "");
  let check6 = (document.getElementById("inp2").value = "");
  let check7 = (document.getElementById("inp3").value = "");
  let check8 = (document.getElementById("inp4").value = "");
}
