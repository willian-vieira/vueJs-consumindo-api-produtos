import { http } from "./config";

export default {
    //Lista os produtos com HTTP GET
    listar:() => {
        return http.get('produtos');
    }

}