const jwt=require('jsonwebtoken');

const EncodeUserToken = (email,user_id, expiresIn)=>{
    let KEY="123-ABC-XYZ";
    let EXPIRE={expiresIn: expiresIn}
    let PAYLOAD={email:email, user_id:user_id}
    return jwt.sign(PAYLOAD,KEY,EXPIRE)
}
const DecodeUserToken = (token)=>{
    try {
        let KEY="123-ABC-XYZ";
        return jwt.verify(token,KEY)
    }
    catch (e) {
        return null
    }
}
module.exports = {EncodeUserToken,DecodeUserToken}