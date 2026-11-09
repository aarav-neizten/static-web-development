function filter() {
  if (document.getElementById("filter").value == "inkjet") {
    document.getElementById("maincontent").style.display = "none";
    document.getElementById("inkjet").style.display = "flex";
    document.getElementById("laserprinter").style.display = "none";
  } else if (document.getElementById("filter").value == "laser") {
    document.getElementById("inkjet").style.display = "none";
    document.getElementById("maincontent").style.display = "none";
    document.getElementById("laserprinter").style.display = "flex";
  }
}

//first product hover effect

document.getElementById("subimg1").onmouseover = function () {
  document.getElementById("mainimg1").src = "../images/Printer/DCP.jpg";
}
document.getElementById("subimg2").onmouseover = function () {
  document.getElementById("mainimg1").src = "../images/Printer/DCP2.jpg";
}
document.getElementById("subimg3").onmouseover = function () {
  document.getElementById("mainimg1").src = "../images/Printer/DCP3.jpg";
}

//second product hover effect

document.getElementById("sub2img1").onmouseover = function () {
  document.getElementById("mainimg2").src = "../images/Printer/t820DW.jpg";
}
document.getElementById("sub2img2").onmouseover = function () {
  document.getElementById("mainimg2").src = "../images/Printer/t820DW2.jpg";
}
document.getElementById("sub2img3").onmouseover = function () {
  document.getElementById("mainimg2").src = "../images/Printer/t820DW3.jpg";
}
document.getElementById("sub2img4").onmouseover = function () {
  document.getElementById("mainimg2").src = "../images/Printer/t820DW4.jpg";
}

//third product hover

document.getElementById("sub3img1").onmouseover = function () {
  document.getElementById("mainimg3").src = "../images/Printer/T420W.jpg";
}
document.getElementById("sub3img2").onmouseover = function () {
  document.getElementById("mainimg3").src = "../images/Printer/T420W2.jpg";
}

//fourth product hover

document.getElementById("sub4img1").onmouseover = function () {
  document.getElementById("mainimg4").src = "../images/Printer/T720DW.jpg";
}
document.getElementById("sub4img2").onmouseover = function () {
  document.getElementById("mainimg4").src = "../images/Printer/T720DW2.jpg";
}
document.getElementById("sub4img3").onmouseover = function () {
  document.getElementById("mainimg4").src = "../images/Printer/T720DW3.jpg";
}

//fifth product hover

document.getElementById("sub5img1").onmouseover = function () {
  document.getElementById("mainimg5").src = "../images/Printer/L2365DW.jpg";
}
document.getElementById("sub5img2").onmouseover = function () {
  document.getElementById("mainimg5").src = "../images/Printer/L2365DW2.jpg";
}
document.getElementById("sub5img3").onmouseover = function () {
  document.getElementById("mainimg5").src = "../images/Printer/L2365DW3.jpg";
}

//sixth product hover

document.getElementById("sub6img1").onmouseover = function () {
  document.getElementById("mainimg6").src = "../images/Printer/L3252.jpg";
}
document.getElementById("sub6img2").onmouseover = function () {
  document.getElementById("mainimg6").src = "../images/Printer/L32522.jpg";
}

//seventh

document.getElementById("sub7img1").onmouseover = function () {
  document.getElementById("mainimg7").src = "../images/Printer/2331.jpg";
}
document.getElementById("sub7img2").onmouseover = function () {
  document.getElementById("mainimg7").src = "../images/Printer/pixma2.jpg";
}

//eighth

document.getElementById("sub8img1").onmouseover = function () {
  document.getElementById("mainimg8").src = "../images/Printer/L2321D.jpg";
}
document.getElementById("sub8img2").onmouseover = function () {
  document.getElementById("mainimg8").src = "../images/Printer/L2321D2.jpg";
}
document.getElementById("sub8img3").onmouseover = function () {
  document.getElementById("mainimg8").src = "../images/Printer/L2321D3.jpg";
}

//ninth

document.getElementById("sub9img1").onmouseover = function () {
  document.getElementById("mainimg9").src = "../images/Printer/Hp.jpg";
}
document.getElementById("sub9img2").onmouseover = function () {
  document.getElementById("mainimg9").src = "../images/Printer/Hp3.jpg";
}
document.getElementById("sub9img3").onmouseover = function () {
  document.getElementById("mainimg9").src = "../images/Printer/Hp4.jpg";
}

//tenth

document.getElementById("sub10img1").onmouseover = function () {
  document.getElementById("mainimg10").src = "../images/Printer/L2351DW.jpg";
}
document.getElementById("sub10img2").onmouseover = function () {
  document.getElementById("mainimg10").src = "../images/Printer/L2351DW2.jpg";
}
document.getElementById("sub10img3").onmouseover = function () {
  document.getElementById("mainimg10").src = "../images/Printer/L2351DW3.jpg";
}

//eleventh

document.getElementById("sub11img1").onmouseover = function () {
  document.getElementById("mainimg11").src = "../images/Printer/hp2.jpg";
}
document.getElementById("sub11img2").onmouseover = function () {
  document.getElementById("mainimg11").src = "../images/Printer/hp5.jpg";
}
document.getElementById("sub11img3").onmouseover = function () {
  document.getElementById("mainimg11").src = "../images/Printer/hp6.jpg";
}

//twelevth

document.getElementById("sub12img1").onmouseover = function () {
  document.getElementById("mainimg12").src = "../images/Printer/pixma.jpg";
}
document.getElementById("sub12img2").onmouseover = function () {
  document.getElementById("mainimg12").src = "../images/Printer/pixma2.jpg";
}
document.getElementById("sub12img3").onmouseover = function () {
  document.getElementById("mainimg12").src = "../images/Printer/pixma3.jpg";
}
