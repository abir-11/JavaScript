function  onlyCharacter( str ) {
        if(typeof str !=="string"){
            return "Invalid"
        }
        let result=str.split(' ').join('');

        return result.toUpperCase();

    }

console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  "
));