function fun1() {
    var name = frm1.name.value;
    var gender = frm1.gender.value;
    var cource = frm1.cource.value;
    var remark = frm1.remark.value;
    alert("Name: " + name + "\nGender: " + gender + "\nCource: " + cource + "\nRemark: " + remark);
}

function result() {
    var math = Number(frm2.math.value);
    var sci = Number(frm2.sci.value);
    var eng = Number(frm2.eng.value);

    frm2.ttlMarks.value = math + sci + eng;
    frm2.percentMarks.value = ((math + sci + eng) / 300) * 100
    return false
}

function emp() {
    var sal = Number(empform.sal.value)
    var grade = empform.perform.value;

    if (grade === 'a') {
        var b = (sal * 30) / 100;
        empform.bouns.value = b
        empform.total.value = sal + b;
    } else if (grade === 'b') {
        var b = (sal * 10) / 100;
        empform.bouns.value = b
        empform.total.value = sal + b;
    } else if (grade === 'c') {
        var b = (sal * 5) / 100;
        empform.bouns.value = b
        empform.total.value = sal + b;
    }
}

function openModel() {
    document.getElementsByClassName("modal")[0].classList += " d-block"
}
function closeModel() {
    document.getElementsByClassName("modal")[0].classList += " d-none"
}