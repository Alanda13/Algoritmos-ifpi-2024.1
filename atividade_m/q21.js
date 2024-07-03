import { get_number, print } from '../utils/io_utils.js';

function main(){
    const n = get_number('valor de n: ')
    let s = 0;
    let i = 1;
    let numerador = 1;

    while(i <= 50){
        s += numerador / i;
        numerador += 2;
        i++   
    }
    print(s)

}
main()