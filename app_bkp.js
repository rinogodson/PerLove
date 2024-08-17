function adder(arr){
    console.log(arr)
    if(arr.length <= 2){
        let reStr = arr.join("");
        console.log(reStr)
        return reStr;
    }
    else {
        let len = arr.length;
        let Narr = [];
        for(let i = 0; i < Math.floor(len / 2); i++){
            let sum = (arr[i] + arr[len - 1 - i]);
            if((sum / 10) >= 1){
                Narr.push(Math.floor(sum / 10));
                Narr.push(sum % 10);
            }
            else{
                Narr.push(sum);
            }
            
            
        }
        if (len % 2 !== 0) {
            let middle = arr[Math.floor(len / 2)];
            if(middle / 10 >= 1){
                Narr.push(middle % 10);
                Narr.push(middle - (middle % 10)*10);
            }
            else{
                Narr.push(middle);
            }
        }
        return adder(Narr)
    }
}

function heart(str1, str2){
    let arr = [["A", 0], ["B", 0], ["C", 0], ["D", 0], ["E", 0], ["F", 0],
    ["G", 0], ["H", 0], ["I", 0], ["J", 0], ["K", 0], ["L", 0],
    ["M", 0], ["N", 0], ["O", 0], ["P", 0], ["Q", 0], ["R", 0],
    ["S", 0], ["T", 0], ["U", 0], ["V", 0], ["W", 0], ["X", 0],
    ["Y", 0], ["Z", 0]
    ];

    let str = str1.concat(str2);
    str = str.toUpperCase();
    str = str.replaceAll(/\s/g,'')

    for(let i = 0; i < str.length; i++){
        switch(str[i].toLowerCase()){
            case 'a':
            arr[0][1]++;
            break;
        case 'b':
            arr[1][1]++;
            break;
        case 'c':
            arr[2][1]++;
            break;
        case 'd':
            arr[3][1]++;
            break;
        case 'e':
            arr[4][1]++;
            break;
        case 'f':
            arr[5][1]++;
            break;
        case 'g':
            arr[6][1]++;
            break;
        case 'h':
            arr[7][1]++;
            break;
        case 'i':
            arr[8][1]++;
            break;
        case 'j':
            arr[9][1]++;
            break;
        case 'k':
            arr[10][1]++;
            break;
        case 'l':
            arr[11][1]++;
            break;
        case 'm':
            arr[12][1]++;
            break;
        case 'n':
            arr[13][1]++;
            break;
        case 'o':
            arr[14][1]++;
            break;
        case 'p':
            arr[15][1]++;
            break;
        case 'q':
            arr[16][1]++;
            break;
        case 'r':
            arr[17][1]++;
            break;
        case 's':
            arr[18][1]++;
            break;
        case 't':
            arr[19][1]++;
            break;
        case 'u':
            arr[20][1]++;
            break;
        case 'v':
            arr[21][1]++;
            break;
        case 'w':
            arr[22][1]++;
            break;
        case 'x':
            arr[23][1]++;
            break;
        case 'y':
            arr[24][1]++;
            break;
        case 'z':
            arr[25][1]++;
            break;
        default:
            console.log("No Special Characters or numbers.")
            break;
        }
    }

    arr = arr.filter(char => char[1] !== 0);
    let strSet = new Set(str);
    strSet = Array.from(strSet);

    arr = arr.sort(
        (a, b) => {
            return strSet.indexOf(a[0]) - strSet.indexOf(b[0]);
    });
    console.log(arr)

    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i][1];
    }

    arr = adder(arr);
    
}

heart("thridy", "threyya");

