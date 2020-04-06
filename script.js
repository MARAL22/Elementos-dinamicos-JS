function showContent(){
    let list = document.getElementsByClassName('none');
    setTimeout(function(){
        var URLhash = window.location.hash;
        Array.prototype.forEach.call(list,element=>{
            element.classList.remove('show');
        });
        let view = document.getElementById(URLhash);
        view.classList.add('show');
    },100);
}
