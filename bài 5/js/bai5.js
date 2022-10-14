function tong2so() {
    var soCo2Chu = document.getElementById('2so').value
    var soHangDonVi = soCo2Chu % 10
    var soHangChuc =Math.floor(soCo2Chu / 10)
    var tong = soHangDonVi + soHangChuc
    document.getElementById('txtThongBao').innerHTML = "Tổng 2 số: " + tong
}
document.getElementById('btnTinh').onclick = tong2so