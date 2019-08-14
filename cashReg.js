function checkCashRegister(price, cash, cid) {
  var change = [];

  let changeNeeded = cash - price;
  let cashOnHand = 0.00;
  let amount = 0;

  for(let i=0;i<cid.length;i++){
    cashOnHand += cid[i][1];
  }

  cashOnHand = Math.round(100*cashOnHand)/100;

  if(cashOnHand < changeNeeded){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
  if(cashOnHand == changeNeeded){
    return {status: "CLOSED", change: cid};
  }

  for(let j = cid.length-1; j >= 0; j--){
    switch (cid[j][0]) {
      case "ONE HUNDRED":
        if(cid[j][1] != 0.00 && changeNeeded - 100 >= 0.00){
          amount = 0;
          while(changeNeeded >= 100 && cid[j][1] != 0){
            changeNeeded -= 100;
            cid[j][1] -= 100;
            amount += 100;
          }
          change.push([cid[j][0], amount]);
        }
        break;
      case "TWENTY":
        if(cid[j][1] != 0.00 && changeNeeded - 20 >= 0.00){
          amount = 0;
          while(changeNeeded >= 20 && cid[j][1] != 0){
            changeNeeded -= 20;
            cid[j][1] -= 20;
            amount += 20;
          }
          change.push([cid[j][0], amount]);
        }
        break;
      case "TEN":
        if(cid[j][1] != 0.00 && changeNeeded - 10 >= 0.00){
          amount = 0;
          while(changeNeeded >= 10 && cid[j][1] != 0){
            changeNeeded -= 10;
            cid[j][1] -= 10;
            amount += 10;
          }
          change.push([cid[j][0], amount]);
        }
        break;
      case "FIVE":
        if(cid[j][1] != 0.00 && changeNeeded - 5 >= 0.00){
          amount = 0;
          while(changeNeeded >= 5 && cid[j][1] != 0){
            changeNeeded -= 5;
            cid[j][1] -= 5;
            amount += 5;
          }
          change.push([cid[j][0], amount]);
        }
        break;
      case "ONE":
        if(cid[j][1] != 0.00 && changeNeeded - 1.00 >= 0.00){
          amount = 0;
          while(changeNeeded >= 1 && cid[j][1] != 0){
            changeNeeded -= 1.00;
            cid[j][1] -= 1.00;
            amount += 1.00;
          }
          change.push([cid[j][0], amount]);
        }
        break;
      case "QUARTER":
        if(cid[j][1] != 0.00 && changeNeeded - 0.25 >= 0.00){
          amount = 0;
          while(changeNeeded >= 0.25 && cid[j][1] != 0){
            changeNeeded -= 0.25; 
            changeNeeded = Math.round(100*changeNeeded)/100;
            cid[j][1] -= 0.25;
            amount += 0.25;
          }
          change.push([cid[j][0], amount]);
        }
        break;
      case "DIME":
        if(cid[j][1] != 0.00 && changeNeeded - 0.10 >= 0.00){
          amount = 0;
          while(changeNeeded >= 0.10 && cid[j][1] != 0){
            changeNeeded -= 0.10;
            cid[j][1] -= 0.10;
            amount += 0.10;          }
          change.push([cid[j][0], amount]);
        };
        break;
      case "NICKEL":
        if(cid[j][1] != 0.00 && changeNeeded - 0.05 >= 0.00){
          amount = 0;
          while(changeNeeded >= 0.05 && cid[j][1] != 0){
            changeNeeded -= 0.05;
            cid[j][1] -= 0.05;
            amount += 0.05;
          }
          change.push([cid[j][0], amount]);
        }
        break;
      case "PENNY":
        if(cid[j][1] != 0.00 && changeNeeded - 0.01 >= 0.00){
          amount = 0.00;
          while(changeNeeded >= 0.01 && cid[j][1] != 0.00){
            changeNeeded -= 0.01;
            changeNeeded = Math.round(100*changeNeeded)/100;
            cid[j][1] -= 0.01;
            amount += 0.01;
          }
          change.push([cid[j][0], amount]);
        }
        break; 
    }
  }
  if(changeNeeded != 0.00)
    return {status: "INSUFFICIENT_FUNDS", change: []};
  else
    return {status: "OPEN", change: change};
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
