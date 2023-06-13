let table = document.querySelector(".table");
let output = document.querySelector(".output");
let cleanOutput = document.querySelector(".cleanOutput");

table.onclick = function (event) {          // делегирование событий, отслеживаем клик и присваиваем значение окну вывода
    let target = event.target.innerHTML;
    if (event.target.tagName != "SPAN") return;
    output.innerHTML = target;
}

cleanOutput.addEventListener('click', () => { //слушатель на кнопку для обнуления значения узла
    output.innerHTML = ""
})

// вывод максимального и минимального числа из объекта

let obj = {
    a0:{
        aa:[3,9], 
        bb:2, 
        cc:{
            aaa:4,
            bbb:-5
        }
    },
    a1:{
        aa:[0,8], 
        bb:-7, 
        cc:{
            aaa:8,
            bbb:7
        }
    },
    a2:{
        aa:[9,-4], 
        bb:1, 
        cc:{
            aaa:-1,
            bbb:8
        }
    },
    a3:{
        aa:[8,-1], 
        bb:7, 
        cc:{
            aaa:3,
            bbb:0
        }
    },
    a4:{
        aa:[-4,-2], 
        bb:-2, 
        cc:{
            aaa:8,
            bbb:9
        }
    }
    }

    
    let maxNum = -Infinity;
    let minNum = Infinity;
    let outputObjMin = document.querySelector(".outputObjMin");
    let outputObjMax = document.querySelector(".outputObjMax");

    for (let key in obj) {
      let aa = obj[key].aa;
      for (let i = 0; i < aa.length; i++) {
        if (aa[i] > maxNum) {
          maxNum = aa[i];
        }
        if (aa[i] < minNum) {
          minNum = aa[i];
        }
      }
      let bb = obj[key].bb;
      if (bb > maxNum) {
          maxNum = bb;
      }
      if (bb < minNum) {
          minNum = bb;
      }
      let aaa = obj[key].cc.aaa;
      if (aaa > maxNum) {
          maxNum = aaa;
      }
      if (aaa < minNum) {
          minNum = aaa;
      }
      let bbb = obj[key].cc.bbb;
      if (bbb > maxNum) {
          maxNum = bbb;
      }
      if (bbb < minNum) {
          minNum = bbb;
      }
        outputObjMin.innerHTML = "Наименьшее число в объекте это " + minNum;
        outputObjMax.innerHTML = "Наименьшее число в объекте это " + maxNum;
    }
    