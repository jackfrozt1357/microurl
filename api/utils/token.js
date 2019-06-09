const allowables = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuop[asdfghjklzxcvbnm1234567890';

module.exports = function encoding(num){
    let str = ''; 
    
    while(num >=0)
    {
        str+=allowables[num%allowables.length]
        num = Math.floor(num/allowables.length)
    }
    return str;
}