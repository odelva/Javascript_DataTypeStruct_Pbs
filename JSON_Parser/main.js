/**
 * returns a javascript object from a JSON formatted string
 * Example json to javascript object:
 *   "5"          -> 5
 *   "'hello'"   -> 'hello'
 *   "[]"         -> []
 *   "{}"         -> {}
 *   "["hello"]"  -> ['hello']
 *
 *  For more examples, use the JSON.stringify method in the console
 */

function JSONParser(string) {
    //CODE HERE
    var result;
    function deobj(myelement)
    {
        var newobj={};
        var key=[];
        var value=[];
        var element;





        if(myelement.indexOf('{',1)===-1) {
            element = myelement.slice(1, myelement.length-1);
            element = element.split(',');
        }
        else{
            myelement=myelement.replace(/,/g,' ');



            function replace_comma(mystring)
            {
                var newstr=mystring;

                for (var p=0; p<100; p++) {
                    var startpos = newstr.lastIndexOf('{');
                    if (startpos == -1) {

                        break;

                    }
                    else {
                        var substr = newstr.slice(startpos, newstr.length - 1);
                        var closebrackpos = substr.lastIndexOf('}');

                        var subsubstr = substr.slice(0, closebrackpos + 1);

                        subsubstr = subsubstr.replace(' ', ',');
                        subsubstr = subsubstr.replace('{', "[");
                        subsubstr = subsubstr.replace('}', "]");

                        var upperstr = newstr.slice(0, startpos);

                        var bottomstr = newstr.slice(closebrackpos + 1 + startpos);

                        newstr = upperstr + subsubstr + bottomstr;


                    }
                }
                return newstr;
            }

            myelement=replace_comma(myelement);

            myelement=myelement.slice(1, myelement.length-1);
            for (var k=0; k<100; k++) {
                if (myelement.indexOf('[')===-1 && myelement.indexOf(']')===-1 )
                {
                    break;
                }
                myelement = myelement.replace('[', '{');
                myelement = myelement.replace(']', '}');
            }


            element=myelement.split(' ');



        }



        for (var a=0; a<element.length; a++) {
            var colonpos = element[a].indexOf(':');
            key.push(element[a].slice(0, colonpos));
            value.push(element[a].slice(colonpos + 1));
        }



        for (var b=0; b<key.length; b++) {
            if (key[b][0] !== '{') {
                if (key[b] === 'true') {
                    key[b] = true;
                }
                else if (key[b] === 'false') {
                    key[b] = false;
                }
                else if (key[b][0] === '"') {
                    key[b] = key[b].slice(1, key[b].length - 1);
                }
                else {
                    key[b] = key[b];
                }
            }
            else
            {
                if (key[b] === '{}') {
                    key[b] = {};
                }
                else {
                    key[b] = deobj(key[b]);

                }

            }

            if (value[b][0] !== '{') {
                if (value[b] === 'true') {
                    value[b] = true;
                }
                else if (value[b] === 'false') {
                    value[b] = false;
                }
                else if (value[b][0] === '"') {
                    value[b] = value[b].slice(1, value[b].length - 1);
                }
                else {
                    value[b] = value[b];
                }
            }
            else {
                if (value[b] === '{}') {
                    value[b] = {};
                }
                else {
                    value[b] = deobj(value[b]);

                }
            }
            newobj[key[b]] = value[b];

        }
        return newobj;

    };
    if ( string[0]!= '{' && string[0]!='[')
    {

        if ( string ==='true')
        {
            result= true;
        }
        else if (string==='false')
        {
            result= false;
        }
        else if (string[0]=== '"')
        {
            result=string.slice(1,string.length-1);
        }
        else
        {
            result=string;
        }
    }
    else if ( string.charAt(0)==='[')
    {
        if (string==='[]')
        {
            result=[];
        }
        else
        {
            result=[];
            string=string.slice(1, string.length-1);
            var copyarray=string.split(',');
            result=copyarray;

            for ( var i=0; i<result.length; i++)
            {
                if (result[i][0]!=='{')
                {


                    if ( result[i] ==='true')
                    {
                        result[i]= true;
                    }
                    else if (result[i]==='false')
                    {
                        result[i]= false;
                    }
                    else if(result[i][0]==='"')
                    {
                        result[i]=result[i].slice(1,result[i].length-1);
                    }
                    else
                    {
                        result[i]=result[i];
                    }

                }
                else
                {
                    result[i]=deobj(result[i]);

                }
            }



        }


    }
    else if ( string.charAt(0)==='{')
    {
        if (string==='{}')
        {
            result={};
        }
        else
        {
            result=deobj(string);
        }



    }
    return result;
}






console.log(JSONParser('{a:{b:1,c:2}}'));
console.log(JSONParser('{a:{b:{c:2}}}'));
console.log(JSONParser('{a:true,b:1,c:"test"}'));
console.log(JSONParser('{a:{b:1},x:2}'));
console.log(JSONParser('{a:{b:1}}'));
console.log(JSONParser('[{a:{c:2}},{b:2}]'));
console.log(JSONParser('{a:{b:{1:2},c:2},x:{y:1},y:0}'));
console.log(JSONParser('{a:{b:{1:2},c:2},x:{y:1},y:{0:n}}'));
console.log(JSONParser('{a:{b:{1:2},c:{2:1}},n:{y:{2:1}},y:{0:{n:a}}}'));
console.log(JSONParser('{a:true,b:1,c:"test",o:98,2:13}'));
console.log(JSONParser('[a,b,12,9,{a:c}]'));