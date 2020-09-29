module.exports = function toReadable (number) {
    let single = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let toTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    if(number.toString().length === 1){
        return single[number];
    }
    if(number.toString().length === 2){
        if(number.toString().charAt(0) === '1'){
            return toTwenty[number.toString().charAt(1)];
        } else{
            if(number.toString().charAt(1) === '0'){
                return dozens[number.toString().charAt(0)]
            } else{
                return dozens[number.toString().charAt(0)] + ' ' + single[number.toString().charAt(1)]
            }
        }
    }
    if(number.toString().length === 3){
        if(number.toString().charAt(1) === '0' && number.toString().charAt(2) === '0'){
            return single[number.toString().charAt(0)] + ' hundred';
        } else if(number.toString().charAt(1) === '1'){
            return single[number.toString().charAt(0)] + ' hundred ' + toTwenty[number.toString().charAt(2)];
        } else if(number.toString().charAt(1) === '0' && number.toString().charAt(2) !== '0'){
            return single[number.toString().charAt(0)] + ' hundred ' + single[number.toString().charAt(2)];
        } else if(number.toString().charAt(1) !== '0' && number.toString().charAt(2) === '0'){
            return single[number.toString().charAt(0)] + ' hundred ' + dozens[number.toString().charAt(1)];
        }  else{
            return single[number.toString().charAt(0)] + ' hundred ' + dozens[number.toString().charAt(1)] + ' ' + single[number.toString().charAt(2)];
        }
    }
}
