import { get_number, print } from '../utils/io_utils.js';

function main(){
    const n = get_number('valor de n: ')
    let s = 0;
    let i = 1;
    let sinal = 1;

    while(i <= n){
        s += sinal * i / (N - i + 1)
        sinal *= -1;
        i++   
    }
    print(s)

}
main()