function CviDtich() {
    var chieuDai = document.getElementById("chieuDai").value
    var chieuRong = document.getElementById("chieuRong").value
    var dienTich = chieuDai * chieuRong
    var chuVi = (Number(chieuDai) + Number(chieuRong)) * 2
    document.getElementById("txtThongBao").innerHTML = "Diện tích là: " + dienTich
    document.getElementById("txtThongBao2").innerHTML = "Chu vi là: " + chuVi
}
document.getElementById("btnTinh").onclick = CviDtich