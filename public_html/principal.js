/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function world(inf , sup , inc , gro){
                var i , j, k;
                j = 0;
                k = 27;
                var diminf , dimsup, desp;
                desp = 20;
                diminf = inf + desp;
                dimsup = sup - desp;
                
                var array = new Array();
                //var i, inf = 20,  sup = 700, inc = 20,  gro = 0.2;
                //var paper = Raphael("paper1", sup, sup);
                var rect1 = paper.rect(inf , inf , sup , sup).attr({fill: "#3C65AB"}); 
                //paper.path("M26.33,15.836l-3.893-1.545l3.136-7.9c0.28-0.705-0.064-1.505-0.771-1.785c-0.707-0.28-1.506,0.065-1.785,0.771l-3.136,7.9l-4.88-1.937l3.135-7.9c0.281-0.706-0.064-1.506-0.77-1.786c-0.706-0.279-1.506,0.065-1.785,0.771l-3.136,7.9L8.554,8.781l-1.614,4.066l2.15,0.854l-2.537,6.391c-0.61,1.54,0.143,3.283,1.683,3.895l1.626,0.646L8.985,26.84c-0.407,1.025,0.095,2.188,1.122,2.596l0.93,0.369c1.026,0.408,2.188-0.095,2.596-1.121l0.877-2.207l1.858,0.737c1.54,0.611,3.284-0.142,3.896-1.682l2.535-6.391l1.918,0.761L26.33,15.836z").attr({fill: "#000", stroke: "none"});
                for (i = inf ; i <= sup ; i = inc + i){
                        
                       
                        paper.path("M" + i + " " + diminf +" " + i + " " + dimsup).attr({"stroke": "white", "stroke-width": gro,"stroke-dasharray": "."}); 
                        paper.path("M" + diminf + " " + i +" " + dimsup + " " + i).attr({"stroke": "white", "stroke-width": gro,"stroke-dasharray": "."});
                        paper.text(i + desp, sup - 10 , j).attr({"fill": "white"});
                        
                        paper.text(inf+10, i + desp , k).attr({"fill": "white"});
                        j++;
                        k--;
                } 
                
                return ("");
}