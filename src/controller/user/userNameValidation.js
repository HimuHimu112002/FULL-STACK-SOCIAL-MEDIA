exports.validationLength = (text, min, max)=>{
    if(text.length < min || text.length > max){
        return false
    }else{
        return true
    }
}