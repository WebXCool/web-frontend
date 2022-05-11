import { toFixed } from "../common/js/common";

export const formatOptionName=function(option){
    let {_name,$_baseAmount,$_targetAmount}=option
    const names=_name.split("-");
    const [baseTokenSymbol,targetTokenSymbol]=names.slice(0,2);
    const trx_pair=names.slice(0,2).join('/');
    const hasUSD=/USD/.test(trx_pair)||(names[0]=='DAI'||names[1]=='DAI');
    let price="";
    let PutOrCall="";
    let r_name=trx_pair;
    if(hasUSD){
       if(_hasUSD(baseTokenSymbol)){
           price=$_targetAmount.div($_baseAmount);
           PutOrCall="call";
       }else if(_hasUSD(targetTokenSymbol)){
           price=$_baseAmount.div($_targetAmount);
           PutOrCall="put";
       }
       r_name+="-"+toFixed(price,4)+"-"+PutOrCall
    }else{
        r_name+="-put"
    }
    let timeStr=names[3].substring(0,2)+":"+names[3].substring(2,4);
    return r_name+"-"+names[2]+'-'+timeStr;
}

const _hasUSD=function(symbol){
    return /USD/.test(symbol)||symbol=="DAI";
}