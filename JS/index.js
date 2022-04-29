$(document).ready(function () {
    var i = 1;
    $("#btnDK").click(function () {
        $("#myModal").modal();
    });
    function KiemTraHT() {
        var mau = /^[A-Z][a-zA-Z]+(\s[A-Z][a-zA-Z\s]+)*$/;
        if ($("#Name").val()=="") {
            $("#tbName").html("Không được để trống");
            return false;
        }
        if (!mau.test($("#Name").val())) {
            $("#tbName").html("Mỗi ký tự đầu viết hoa không sử dụng số");
            return true;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#tbName").blur(KiemTraHT);

    function KiemTraClb() {
        var mau = /^[A-Z][a-zA-Z]+(\s[A-Z][a-zA-Z\s]+)[0-9]*$/;
        if ($("#Clb").val()=="") {
            $("#tbClb").html("Không được để trống");
            return false;
        }
        if (!mau.test($("#Clb").val())) {
            $("#tbClb").html("Dùng chữ hoa đầu từ và số");
            return true;
        }
        $("#tbClb").html("*");
        return true;
    }
    $("#tbClb").blur(KiemTraClb);

    function KiemTraSoAo() {
        var mau = /^[0-9]$/;
        if ($("#Ao").val()=="") {
            $("#tbAo").html("Không được để trống");
            return false;
        }
        if (!mau.test($("#Ao").val())) {
            $("#tbAo").html("chỉ dùng số");
            return true;
        }
        $("#tbAo").html("*");
        return true;
    }
    $("#tbAo").blur(KiemTraSoAo);

    function KiemTraSDT() {
        var mau = /^09\d{2}-\d{3}-\d{3}$/;
        if ($("#SDT").val()=="") {
            $("#tbSDT").html("Không được để trống");
            return false;
        }
        if (!mau.test($("#SDT").val())) {
            $("#tbSDT").html("bắt buộc dùng chữ số  09 ở đầu và các chữ số ở sau đúng định dạng 09xx-xxx-xxx");
            return true;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#tbSDT").blur(KiemTraSDT);

    function KiemTraNTT() {              
        if ($("#NTT").val()=="") {
            $("#tbNTT").html("Không để trống");
            return false;
        }
        var today = new Date();
        var ntt = new Date($("#NTT").val());
        today = today.setDate(today.getDate() + 15);
        if (today > ntt) {
            $("#tbNTT").html("Phải sau ngày hiện tại 15 ngày");
            return false;
        }
        $("#tbNTT").html("*");
        return true;
    }
    $("#NTT").blur(KiemTraNTT);

    $("#Save").click(function () {
        if (KiemTraHT() == true && KiemTraClb() == true && KiemTraSoAo() == true && KiemTraSDT() == true && KiemTraNTT() == true ) {
            row = "<tr>";
            row += "<th>" + (i++)  ;
            row += "<th>" + $("#Name").val() ;
            row += "<th>" + $("#Ao").val() 
            row += "<th>" + $("#Clb").val() ;
            row += "<th>" + $("#NTT").val() ;
            row += "<th>" + $("#SDT").val() ;
            row += "<th>" + $("#ADD").val() ;
            $("#danhSach").append(row);
            $("#myModal").modal("hide");
        }
    })
})