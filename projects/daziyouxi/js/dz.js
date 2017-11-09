window.onload=function() {
    class Game {//es6 中 创建类的方式
        constructor(left,life,state,scor) {//
            this.life=life;
            this.lifenum=5;
            this.speed=5;
            this.state=state;
            this.statenum=1;
            this.scor=scor;
            this.scornum=0;
            this.height=window.innerHeight;
            this.left = left;
            this.num = 3;
            this.obj = {};
            this.flag=true;
            this.st=null;
            // this.phb=phb;
            this.bestScor=localStorage.scor?JSON.parse(localStorage.scor):[];
            // this.updatephb();
        }
        start() {//相当于原型上写的方法 ------开始游戏
            this._int();
            for (let i = 0; i < this.num; i++) {
                this._createLetter(); //创建字母
            }
            this._move();
            this._keydown();//执行这个方法
        }
        _createLetter() {//创建字母的方法即创建一个div 的方法
            let newdiv = document.createElement("div")//添加
            newdiv.className = "letter";
            do { //随机获取26个大写字母 先执行完然后判断
                var randomNum = Math.floor(Math.random() * 26+ 65); //65到90的数 向下取整
                var randomLetter = String.fromCharCode(randomNum);
                //随机图片
                newdiv.style.backgroundImage=`url(img/${randomLetter}.png)`;
            } while (this.obj[randomLetter]);
            do {
                var randomLeft = Math.random() * 920; //随机位置0-920
            } while (this._checkLeft(randomLeft));
            newdiv.style.left = randomLeft + "px";
            let randomTop = Math.random() * 100;
            this.obj[randomLetter] = {left: randomLeft,ele:newdiv};//只要是真值就可以
            newdiv.style.top = randomTop + "px";
//                newdiv.innerHTML = randomLetter;
            this.left.appendChild(newdiv);
        }
        _checkLeft(left) {//位置不重叠
            for (var i in this.obj) {
                if (left > this.obj[i].left - 80 && left < this.obj[i].left + 80) {
                    return true;
                }
            }
        }
        _move() {//动起来
            this.st=setInterval(function () {
                for (let i in this.obj) {//        es5的语法
                    let top = this.obj[i].ele.offsetTop;
                    top += this.speed;
                    this.obj[i].ele.style.top = top + "px";//元素对象的值
                    if(top>this.height){
                        this.lifenum--;//生命值减小
                        this.life.innerHTML=this.lifenum;//生命值
                        this.left.removeChild(this.obj[i].ele)//移除子元素
                        delete this.obj[i];//删除这个元素
                        this._createLetter();// 创建一新的元素
                        if(this.lifenum===0){// 什么时候生命值结束
                            this._gameover();
                        }
                    }
                }
            }.bind(this), 60)//函数定义的时候，直接改他的this方法，用这个和外边的this 一样
        }
        _keydown() {
            this._keydownHandlet=function (e) {
                let kc = e.keyCode;
                let letter = String.fromCharCode(kc);
                if (this.obj[letter]) {
                    this.left.removeChild(this.obj[letter].ele);
                    delete this.obj[letter];
                    this._createLetter();
                    //得分增加
                    this.scornum++;
                    this.scor.innerHTML=this.scornum;
                    //关卡增加
                    if(this.scornum%10===0){
                        this._upstate();
                    }
                }
            }.bind(this);
            document.addEventListener("keydown",this._keydownHandlet);
        }
        _upstate(){//关卡
            this.statenum++;
            this.state.innerHTML=this.statenum;
            if(this.statenum<4){//前三关字母增多
                this._createLetter();//字母增多
            }else{
                this.speed++;//速度加快
            }
        }
        _gameover(){
            alert(`游戏结束 当前得分为${this.scornum}`);
            if (this.bestScor.length<3||this.scornum>this.bestScor[2].scor){
                let name;
                do {
                    // name = prompt("请输入姓名");
                } while (name === "");
                this.bestScor.push({name, scor: this.scornum});
                this.bestScor.sort(function (a,b) {
                    if(a.scor>b.scor){
                        return -1;
                    }else{
                        return 1;
                    }
                });
                if(this.bestScor.length>3){
                    this.bestScor.pop();
                }
                localStorage.scor = JSON.stringify(this.bestScor);
                // this.updatephb();
            }
            clearInterval(this.st);
            this.flag=true;//开关
        }
        
        
        
        _int(){
            this.state.innerHTML=1;
            this.left.innerHTML="";
            this.scor.innerHTML=0;//得分
            this.lifenum=5;
            // this.life
            
            
            this.speed=5;
            this.statenum=1;
            this.scornum=0;
            this.num = 3;
            this.obj = {};
//            this.flag=true;
            this.st=null;
        }
        // updatephb(){
        //     this.bestScor.forEach(function (v,i) {
        //         this.phb[i].innerHTML=v.name+"-"+v.scor;
        //     }.bind(this))
        // }
        pause(){
            clearInterval(this.st)
            document.removeEventListener("keydown",this._keydownHandlet)
        }
        run(){
            this._move();
            this._keydown();
        }
    }
    let pauseBtn=document.querySelector('#pause')
    let state=document.querySelector("#state")
    let life=document.querySelector("#life")
    let left = document.querySelector(".left");
    let scor=document.querySelector("#scor");
    // let phb=document.querySelectorAll(".phb span");
    let game = new Game(left,life,state,scor);//实例化一个grame函数
    let startbtn = document.querySelector("#start");
    let close=document.querySelector('.close')

    startbtn.onclick = function () {
        if (game.flag) {
            game.flag = false;
            game.start();
            this.style.display='none';
        }else{
            this.style.display='block';
            game.flag = true;
        }
    }
    close.onclick=function(){
        game._int();
        startbtn.style.display='block';
        pauseBtn.style.backgroundImage='url(img/zhanting.png)'
        game.flag=true;
    }
    startbtn.addEventListener('click',function(){
            let flag1=true;
            pauseBtn.onclick=function () {
                if (flag1) {
                    game.pause();//游戏暂停
                    this.style.backgroundImage='url(img/kaishi.png)'
                } else {
                    game.run();//游戏继续
                    this.style.backgroundImage='url(img/zhanting.png)'
                }
                flag1 = !flag1;
            }
    })
}















