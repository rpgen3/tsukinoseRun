const undef = void 0;
export class List {
    constructor(){
        this.start = {};
    }
    add(value){
        let now = this.start;
        while(true){
            const {next} = now;
            if(next === undef) return (now.next = {value});
            else if(next.value < value) return (now.next = {value, next});
            now = next;
        }
    }
    delete(value){
        let now = this.start;
        while(true){
            const {next} = now;
            if(next === undef) return;
            else if(next.value === value) return (now.next = next.next);
            now = next;
        }
    }
}
