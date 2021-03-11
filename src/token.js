import jwtDecode from "jwt-decode";
import SecureLS from "secure-ls";
let ls = new SecureLS({encodingType: 'aes'});
export let token = ls.get("currentUser");
let decodedToken = jwtDecode(token);
export default decodedToken;

