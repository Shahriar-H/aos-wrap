
        var f = document.querySelectorAll('.overAnimCon');
        console.log(f.length)
        f.forEach((value,key) => {
            f[key].setAttribute('id','id'+key)
        });
    
        var topPx=[];

    window.onscroll=()=>{
       f.forEach((value, index, array) => {

            var offsets = document.getElementById('id'+index).getBoundingClientRect();
            topPx[index]= offsets.top;
            var getIdForStyle = document.getElementById('id'+index);
            // var geCol = getIdForStyle.getAttribute('data-bgcolor');
            // getIdForStyle.style.backgroundColor=geCol;
            // console.log(geCol);
            // var left = offsets.left;
            // console.log("Top:"+topPx[index]+', Left'+left);
            

            if(topPx[index]>10 && topPx[index]<720){
                
                if(!document.getElementById('overAnimDiv'+index)){
                    // var myElem = document.createElement("div");
                    // myElem.setAttribute("class",'overAnimDiv')
                    // myElem.setAttribute("id",'overAnimDiv'+index)
                    // document.getElementById('id'+index).appendChild(myElem);

                    document.getElementById('id'+index).classList.add('overAnimCon');
                    // document.getElementById('11a').classList.remove('dinvisibale');
                    document.getElementById('id'+index).classList.remove('reverSanim');
                
                }
            }else{
                // document.getElementById('11a').classList.remove('overAnim');
                // document.getElementById('11a').classList.add('dinvisibale');
                var myElemRem = document.querySelector('.overAnimDiv')
                document.getElementById('id'+index).classList.remove('overAnimCon');
                document.getElementById('id'+index).classList.add('reverSanim');
                if(document.querySelector('#overAnimDiv'+index)){
                    document.querySelector('#overAnimDiv'+index).remove();
                }
                
            
            
            }


       })
        




    }