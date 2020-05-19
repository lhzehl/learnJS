let a = 'string';

switch(a){
    case 'block':
        console.log('block');
        break;
    case 'none':
        console.log('none');
        break;
    case 'inline':
        console.log('inline');
        break;
    default:
        console.log('other')
}

let b = 'hidden';

switch(b){
    case 'hidden':
        b = 'visible';
        break;
    default:
        b = 'hidden';
}
let c = 0