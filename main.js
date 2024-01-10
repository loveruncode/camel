


function tinhtong(){

    let ten = document.getElementById('name').value;
    let date  = document.getElementById('date').value;
    let show = document.getElementById('show');

    let trial =Number( document.getElementById('trial').value);

     // day la so goi 
    let traden =Number( document.getElementById('traden').value);
    let cp = Number( document.getElementById('compact').value);
    let melon = Number( document.getElementById('melon').value);
    let dualuoi = Number( document.getElementById('dualuoi').value);

    let sogoi  = traden + cp + melon + dualuoi;
     
     /// tinh mutipack 
    let local2 = Number(document.getElementById('local2').value);
    let adm = Number(document.getElementById('adm').value);
    let qkl2  = Number(document.getElementById('qkl2').value);
    let gactan = Number(document.getElementById('gactan').value);
    let loa  = Number(document.getElementById('loa').value)

    let mutipack = local2 + adm + qkl2 + gactan + loa;

    // tinh trial CP - TD 

    let trialcp = Number(document.getElementById('trialcp').value);
    let trialtd = Number(document.getElementById('trialtd').value);


     //// hien thi qua 
    let local1 =Number( document.getElementById('local1').value);
    let qkl1 =Number( document.getElementById('qkl1').value);
    let lixi  = Number( document.getElementById('lixi').value);

    // tinh so chay 
         let soqua =  local1 + local2 + adm + qkl1 + qkl2 + lixi + gactan + loa;
        let chay = trial - soqua; 

    let trialCPTD = trialcp + trialtd;
    show.innerHTML = `
        Tên BA : ${ten} </br>
        Ngày : ${date} </br>
        Trial : ${trial} </br>
        Số Gói : ${sogoi} </br>
        Số Mutipack : ${mutipack} </br>
        Trial CP-TD : ${trialCPTD} </br>
        Local(1g) : ${local1} </br>
        Local(2g) : ${local2} </br>
        lixi(1g) : ${lixi} </br>
        Quẹt KL (1g) : ${qkl1} </br>
        Quẹt KL (2g) : ${qkl2} </br>
        ADMPRE (3g) : ${adm} </br>
        Gạc Tàn (5g) : ${gactan} </br>
        Loa (5g) : ${loa} </br>
        Chay (1g)  : ${chay}  </br>
        Chay (2g) : 0 </br>
        Fold : ${trial} </br>
        <button onclick="copyToClipboard()">Copy</button>
    `;
}

function copyToClipboard() {
    let showContent = document.getElementById('show').innerText;

    let tempTextArea = document.createElement('textarea');
    tempTextArea.value = showContent;
    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    document.execCommand('copy');

    document.body.removeChild(tempTextArea);

    alert('Đã sao chép vào clipboard');
}

