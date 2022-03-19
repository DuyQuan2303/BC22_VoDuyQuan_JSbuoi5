// GrabX
const GRABX_1 = 8000;
const GRABX_2 = 7500;
const GRABX_3 = 7000;
const GRABX_WAIT = 2000;

// GrabSUV
const GRABSUV_1 = 9000;
const GRABSUV_2 = 8500;
const GRABSUV_3 = 8000;
const GRABSUV_WAIT = 3000;

// GRABBLACK
const GRABBLACK_1 = 10000;
const GRABBLACK_2 = 9500;
const GRABBLACK_3 = 9000;
const GRABBLACK_WAIT = 3500;

var tienKm_1 = 0;
var tienKm_2 = 0;
var tienKm_3 = 0;
var tinhTien = 0;

var tienCho = 0;

var tongTien = tienKm_1 + tienKm_2 + tienKm_3;

document.getElementById("btnTinhTien").onclick = function () {
  var soKm = document.getElementById("soKm").value;
  var tgCho = document.getElementById("tgCho").value;
  //   console.log(soKm,tgCho);

  var loaiXe = layLoaiXe();
  console.log(loaiXe);

  switch (loaiXe) {
    case "grabX":
      tinhTien = tinhTinhTienChiTiet(
        soKm,
        tgCho,
        GRABX_WAIT,
        GRABX_1,
        GRABX_2,
        GRABX_3
      );
      console.log(tinhTien);
      break;

    case "grabSUV":
      tinhTien = tinhTinhTienChiTiet(
        soKm,
        tgCho,
        GRABSUV_WAIT,
        GRABSUV_1,
        GRABSUV_2,
        GRABSUV_3
      );
      console.log(tinhTien);
      break;
    case "grabBlack":
      tinhTien = tinhTinhTienChiTiet(
        soKm,
        tgCho,
        GRABBLACK_WAIT,
        GRABBLACK_1,
        GRABBLACK_2,
        GRABBLACK_3
      );
      console.log(tinhTien);
      break;

    default:
      alert("Vui lòng chọn loại xe");
      break;
  }
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = tongTien;
};
document.getElementById("btnHoaDon").onclick = function () {
  var content1 = "";
  var soKm = document.getElementById("soKm").value;
  var tgCho = document.getElementById("tgCho").value;
  var loaiXe = layLoaiXe();

  switch (loaiXe) {
      case "grabX":
          if(0 < soKm && soKm <=1)
          {
              var inKKQQ = inHoadonTheomau01(tgCho, GRABX_WAIT, tienCho, soKm, GRABX_1, tongTien);
          }
          else if(1 < soKm && soKm <= 19)
          {
              var inKKQQ = inHoadonTheomau02(tgCho, GRABX_WAIT, tienCho, soKm, GRABX_1, GRABX_2, tongTien);
          }
          else if(soKm > 19)
          {
              var inKKQQ = inHoadonTheomau03(tgCho, GRABX_WAIT, tienCho, soKm,GRABX_1, GRABX_2, GRABX_3, tongTien);
          }
          document.getElementById("tbody").innerHTML = inKKQQ;
          break;

      case "grabSUV":
          if(0 < soKm && soKm <=1)
          {
              var inKKQQ = inHoadonTheomau01(tgCho, GRAB_SUV_WAIT, tienCho, soKm, GRAB_SUV_1, tongTien);
          }
          else if(1 < soKm && soKm <= 19)
          {
              var inKKQQ = inHoadonTheomau02(tgCho, GRAB_SUV_WAIT, tienCho, soKm,GRAB_SUV_1, GRAB_SUV_2, tongTien);
          }
          else if(soKm > 19)
          {
              var inKKQQ = inHoadonTheomau03(tgCho, GRAB_SUV_WAIT, tienCho, soKm, GRAB_SUV_1, GRAB_SUV_2, GRAB_SUV_3, tongTien);
          }
          document.getElementById("tbody").innerHTML = inKKQQ;
          break;

      case "grabBLACK":
          if(0 < soKm && soKm <=1)
          {
              var inKKQQ = inHoadonTheomau01(tgCho, GRAB_BLACK_WAIT, tienCho, soKm, GRAB_BLACK_1, tongTien);
          }
          else if(1 < soKm && soKm <= 19)
          {
              var inKKQQ = inHoadonTheomau02(tgCho, GRAB_BLACK_WAIT, tienCho, soKm, GRAB_BLACK_1, GRAB_BLACK_2, tongTien);
          }
          else if(soKm > 19)
          {
              var inKKQQ = inHoadonTheomau03(tgCho, GRAB_BLACK_WAIT, tienCho, soKm, GRAB_BLACK_1, GRAB_BLACK_2, GRAB_BLACK_3, tongTien);
          }
          document.getElementById("tbody").innerHTML = inKKQQ;
          break;
      default:
          alert("Vui lòng chọn loại xe");
          break;
  }    
}

function inHoadonTheomau(tgCho, giaCho, tienCho, soKm, giaKm, tienKm, tongTien) {
      var content1 = "";

      content1 += "<tr>";
      content1 +=      "<td>KM ĐẦU TIÊN</td>";
      content1 +=      "<td>"+ soKm +"</td>";
      content1 +=      "<td>"+ giaKm +"</td>";
      content1 +=      "<td>"+ tienKm +"</td>";
      content1 += "</tr>";

      content1 += "<tr>";
      content1 +=      "<td>KM ĐẦU TIÊN</td>";
      content1 +=      "<td>"+ soKm +"</td>";
      content1 +=      "<td>"+ giaKm +"</td>";
      content1 +=      "<td>"+ tienKm +"</td>";
      content1 += "</tr>";

      content1 += "<tr>";
      content1 +=      "<td>Thời gian chờ</td>";
      content1 +=      "<td>"+ tgCho +"</td>";
      content1 +=      "<td>"+ giaCho +"</td>";
      content1 +=      "<td>"+ tienCho +"</td>";
      content1 += "</tr>";

      content1 += "<tr>";
      content1 +=      "<td>Tong tien</td>";
      content1 +=      "<td>"+ tongTien +"</td>";
      content1 += "</tr>";
      return content1;
}

function inHoadonTheomau01(tgCho, giaCho, tienCho, soKm, giaKm, tongTien) {
  var content1 = "";

  content1 += "<tr>";
  content1 +=      "<td>KM ĐẦU TIÊN</td>";
  content1 +=      "<td>"+ soKm +"</td>";
  content1 +=      "<td>"+ giaKm +"</td>";
  content1 +=      "<td>"+ soKm*giaKm +"</td>";
  content1 += "</tr>";

  content1 += "<tr>";
  content1 +=      "<td>Thời gian chờ</td>";
  content1 +=      "<td>"+ tgCho +"</td>";
  content1 +=      "<td>"+ giaCho +"</td>";
  content1 +=      "<td>"+ tienCho +"</td>";
  content1 += "</tr>";

  content1 += "<tr>";
  content1 +=      "<td>Tổng tiền</td>";
  content1 +=      "<td>"+ tongTien +"</td>";
  content1 += "</tr>";
  return content1;
}



function inHoadonTheomau02(tgCho, giaCho, tienCho, soKm, giaKm, giaKm2, tongTien) {
  var content1 = "";

  content1 += "<tr>";
  content1 +=      "<td>KM ĐẦU TIÊN</td>";
  content1 +=      "<td>"+ "1" +"</td>";
  content1 +=      "<td>"+ giaKm +"</td>";
  content1 +=      "<td>"+ giaKm*1 +"</td>";
  content1 += "</tr>";

  content1 += "<tr>";
  content1 +=      "<td>KM từ 1 đến "+ soKm +"</td>";
  content1 +=      "<td>"+ (soKm - 1) +"</td>";
  content1 +=      "<td>"+ giaKm2 +"</td>";
  content1 +=      "<td>"+ giaKm2*(soKm - 1) +"</td>";
  content1 += "</tr>";

  content1 += "<tr>";
  content1 +=      "<td>Thời gian chờ</td>";
  content1 +=      "<td>"+ tgCho +"</td>";
  content1 +=      "<td>"+ giaCho +"</td>";
  content1 +=      "<td>"+ tienCho +"</td>";
  content1 += "</tr>";

  content1 += "<tr>";
  content1 +=      "<td>Tổng tiền</td>";
  content1 +=      "<td>"+ tongTien +"</td>";
  content1 += "</tr>";
  return content1;
}


function inHoadonTheomau03(tgCho, giaCho, tienCho, soKm, giaKm, giaKm2, giaKm3, tongTien) {
  var content1 = "";

  content1 += "<tr>";
  content1 +=      "<td>KM ĐẦU TIÊN</td>";
  content1 +=      "<td>"+ "1" +"</td>";
  content1 +=      "<td>"+ giaKm +"</td>";
  content1 +=      "<td>"+ giaKm*1 +"</td>";
  content1 += "</tr>";

  content1 += "<tr>";
  content1 +=      "<td>KM từ 1 đến 18</td>";
  content1 +=      "<td> 18 </td>";
  content1 +=      "<td>"+ giaKm2 +"</td>";
  content1 +=      "<td>"+ giaKm2*18 +"</td>";
  content1 += "</tr>";

  content1 += "<tr>";
  content1 +=      "<td>KM từ 19 đến " + soKm +"</td>";
  content1 +=      "<td>" + (soKm - 19) + "</td>";
  content1 +=      "<td>"+ giaKm3 +"</td>";
  content1 +=      "<td>"+ giaKm3*(soKm - 19) +"</td>";
  content1 += "</tr>";

  content1 += "<tr>";
  content1 +=      "<td>Thời gian chờ</td>";
  content1 +=      "<td>"+ tgCho +"</td>";
  content1 +=      "<td>"+ giaCho +"</td>";
  content1 +=      "<td>"+ tienCho +"</td>";
  content1 += "</tr>";

  content1 += "<tr>";
  content1 +=      "<td>Tổng tiền</td>";
  content1 +=      "<td>"+ tongTien +"</td>";
  content1 += "</tr>";
  return content1;
}


function layLoaiXe() {
  var grabX = document.getElementById("grabX");
  var grabSUV = document.getElementById("grabSUV");
  var grabBlack = document.getElementById("grabBlack");

  var loaiXe = "";

  if (grabX.checked) {
    loaiXe = "grabX";
  } else if (grabSUV.checked) {
    loaiXe = "grabSUV";
  } else if (grabBlack.checked) {
    loaiXe = "grabBlack";
  }
  return loaiXe;
}

function tinhTienCho(tgCho, giaCho) {
  var kq = 0;
  if (tgCho >= 3) {
    kq = Math.floor(tgCho / 3) * giaCho;
  }
  //   tongTien = tienKm_1 + tienCho;
  return kq;
}

function tinhKm_1(soKm, giaKm) {
  var kq = soKm * giaKm;
  return kq;
}

function tinhKm_2(soKm, giaKm) {
  var kq = (soKm - 1) * giaKm;
  return kq;
}

function tinhKm_3(soKm, giaKm) {
  var kq = (soKm - 19) * giaKm;
  return kq;
}
function tinhTinhTienChiTiet(soKm, tgCho, giaCho, giaKm_1, giaKm_2, giaKm_3) {
  tienCho = tinhTienCho(tgCho, giaCho);

  if (soKm >= 0 && soKm <= 1) {
    tienKm_1 = tinhKm_1(soKm, giaKm_1);

    tongTien = tienKm_1 + tienCho;
  } else if (1 < soKm && soKm <= 19) {
    tienKm_1 = tinhKm_1(1, giaKm_1);

    tienKm_2 = tinhKm_2(soKm, giaKm_2);

    tongTien = tienKm_1 + tienKm_2 + tienCho;
    // console.log(tongTien);
  } else if (19 < soKm) {
    tienKm_1 = tinhKm_1(1, giaKm_1);

    tienKm_2 = tinhKm_2(19 - 1, giaKm_2);

    tienKm_3 = tinhKm_3(soKm, giaKm_3);

    tongTien = tienKm_1 + tienKm_2 + tienKm_3 + tienCho;
  }
  return tongTien;
}
