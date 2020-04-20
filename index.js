function insert(num){
    document.form.textview.value = document.form.textview.value + num;
}  
function preview(){
    var exp = document.form.textview.value;
    if(exp){
        var res = document.form.preview.value = eval(exp);
        return res
    }
}
function equal(){
    document.form.textview.value = preview();
    cleanPreview();
}
function cleanPreview(){
    document.form.preview.value = '';
}
function clean(){
    document.form.textview.value = '';
    cleanPreview();
}
function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
    document.form.preview.value = '';
}
