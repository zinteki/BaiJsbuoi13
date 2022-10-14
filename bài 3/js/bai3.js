function doiUsd() {
    var soUsd = document.getElementById("inpUsd").value;
    var thanhTien = soUsd * 23500
    document.getElementById("txtThongBao").innerHTML = "thành tiền: "  + thanhTien
}
document.getElementById("btnTinh").onclick = doiUsd