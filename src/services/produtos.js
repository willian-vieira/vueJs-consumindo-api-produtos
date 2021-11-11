import { http } from "./config";

export default {
    //Lista os produtos com HTTP GET
    listar:() => {
        return http.get('produtos');
    },

    //Salva os produtos com HTTP POST
    salvar:(produto) => {
        return http.post('produto', produto);
    }
}