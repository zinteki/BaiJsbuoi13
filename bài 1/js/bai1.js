function soNgaylam() {
    var soNgayLam = document.getElementById("inpNgay").value;
    var thanhTien = soNgayLam * 100000
    document.getElementById("txtThongBao").innerHTML = "thành tiền: "  + thanhTien
}
document.getElementById("btnTinh").onclick = soNgaylam