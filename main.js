let bieuthucElement = document.querySelector(".bieuthuc");
let ketquaElement = document.querySelector(".ketqua");
let dapanElement = document.querySelectorAll(".dapan");
let diemElement = document.querySelector(".diem");
let timeElement = document.querySelector(".tab-time");
let thua = document.querySelector(".chet");
let diemthua = document.querySelector(".diemthua");
let choilai = document.querySelector(".choilai");
let boxgame = document.querySelector(".box-game");

var diem = 0;
console.log(dapanElement);
function getRandomNumber(a){
    return Math.floor(Math.random()*a)+1;
}

function getDau(){
    var dau = ["+","-"];
    let index = Math.floor(Math.random()*dau.length);
    return dau[index];
}

function check(){
    var a = [0,1];
    return Math.floor(Math.random()* a.length);
}

function randomDS(){
    let rd = Math.random();
    console.log(rd);
    if (rd >= 0.5){
        return kqDung()
    }
    else{
        return kqSai()
    }
}

function kqDung(){
    let x = document.querySelector('.bieuthuc').textContent;
    console.log("kq dung:" + eval(x));
    return eval(x)
}

function kqSai(){
    let y = document.querySelector('.bieuthuc').textContent + " + " + 3; 

    console.log("kq sai:" + eval(y));
    return eval(y);
}

function next(){
    diem += 1;
    console.log('jahsdhdsadbjk');
    // diemElement.innerHTML = "Điểm: " + diem;
    tao();
}

function gameover(){
    diemthua.innerHTML = 'Điểm: ' + diem;
    thua.style.display = 'block';
    // dapanElement.style.display = 'none';
    boxgame.style.opacity = '0.6';
    timeElement.style.width = '0';
}

function check(){
    var check = document.querySelector('.ketqua').textContent;
    console.log((check));
    var btn = false;
    var ok = false;
    dapanElement.forEach(function(val){
        val.onclick = function(e){
            clearTimeout(time);
            btn = e.target.textContent;
            if(check == kqDung() && btn=="Đ"  || check == kqSai() && btn=="S"  ){
                ok = true;
                timeElement.style.width = "100%"; 
                timeElement.style.transition = 'none'; 
            }
            
            else{
                ok = false;

            }
            ok ? next() : gameover();
        }

    })
    // console.log(btn); 
}

var time;
function tao(){
    setTimeout(function(){
        timeElement.style.width = '0';
        timeElement.style.transition = 'all 5s'; 
    },0)
    time = setTimeout(function(){
        gameover();
    },5000);
    var x = getRandomNumber(10);
    var y = getRandomNumber(10);
    var dau = getDau();
    var bieuthuc =  x + " " + dau + " " + y ;
    bieuthucElement.innerHTML = bieuthuc;
    diemElement.innerHTML = "Điểm: " + diem;
    ketquaElement.innerHTML =   randomDS();
    check()
}
choilai.onclick = function(){
    diem = 0;
    timeElement.style.width = "100%"; 
    timeElement.style.transition = 'none'; 
    thua.style.display = 'none';
    boxgame.style.opacity = '1';
    tao();
}
tao()

