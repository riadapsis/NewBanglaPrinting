/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.
(function() {
    /*var canvas = document.getElementById("canvas"),
    html_container = document.getElementById("thehtml"),
    html = html_container.innerHTML;
    rasterizeHTML.drawHTML(html, canvas);
    var imageData = canvas.toDataURL('image/png');
    alert(imageData);
    BTPrinter.connect(function(data){
        BTPrinter.printImage(function (data1) {
            //alert(JSONdata1);
        }, function (err) {
            alert("ERRO IMAGEM"+ JSON.stringify(err));
        }, imageData);
    },function(err){
        alert(JSON.stringify(err));
    }, "PTP-II");*/

})();

function myEventHandler() {
    "use strict" ;

    var ua = navigator.userAgent ;
    var str ;

    if( window.Cordova && dev.isDeviceReady.c_cordova_ready__ ) {
            str = "It worked! Cordova device ready detected at " + dev.isDeviceReady.c_cordova_ready__ + " milliseconds!" ;
    }
    else if( window.intel && intel.xdk && dev.isDeviceReady.d_xdk_ready______ ) {
            str = "It worked! Intel XDK device ready detected at " + dev.isDeviceReady.d_xdk_ready______ + " milliseconds!" ;
    }
    else {
        str = "Bad device ready, or none available because we're running in a browser." ;
    }

    alert(str) ;
}
function printImg(){
    BTPrinter.connect(function(data){
        alert('Connection Successful!!!');
    },function(err){
        alert(JSON.stringify(err));
    }, "PTP-II");
    
    /*BTPrinter.disconnect(function (data) {
        alert("DESCONECTADO");
        //console.log(data);
    }, function (err) {
        alert("ERRO DESCONECTAR");
        //console.log(err);
    }, "PTP-II");*/
}

function printImg2(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.font = "bold 27px bangla";
    ctx.fillText("অগ্রণী ট্রেডিং কর্পোরেশন, গুলশান",0,25);
    ctx.font = "26px bangla";
    ctx.fillText("০১৭১২৫৩১৯৪২,১৫-১০-২০১৭ ১২:১০",0,50);
    ctx.font = "27px bangla";
    ctx.fillText("Dulal Store (MVP)",0,75);
    ctx.fillText("---------------------------------------",0,95);
    ctx.fillText(line_format('B&H FF','৪০','৪০৩.৮'),0,120);
    ctx.fillText(line_format('JPGL SW','১০০','৬৯৯.৫'),0,145);
    ctx.fillText(line_format('DB SP 20S','১০০','২৬৯.৫'),0,170);
    var imageData = canvas.toDataURL('image/png');
    alert('Data is ready to print');
    BTPrinter.printImage(function (data1) {
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.fillText(line_format('B&H FF','৪০','৪০৩.৮'),0,25);
        ctx.fillText(line_format('JPGL 12S','১০০','৬৯৯.৫'),0,55);
        ctx.fillText(line_format('DB SP 20S','১০০','২৬৯.৫'),0,85);
        ctx.fillText(line_format('B&H BG','১০০','২২২০.৯'),0,115);
        ctx.fillText("---------------------------------------",0,145);
        ctx.fillText(line_format('Total','-','৪৯৬৬.৫'),0,175);
        var imageData = canvas.toDataURL('image/png');
        BTPrinter.printImage(function (data2) {
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.fillText("প্রতি প্যাকেটের মূল্য:",0,25);
            ctx.fillText('B&H:20s-২০১.৯০,12s-১২১;',0,50);
            ctx.fillText('JPGL/PM/CAP:20s-১৩৯.৯০',0,75);
            ctx.fillText("JPGL:12s-৮৩.৯৪;SRF:20s৮৯.৯০;",0,100);
            ctx.fillText("DB/PL/HW:20s-৫৩.৯০, 10s ২৬.৯৫",0,125);
            var imageData = canvas.toDataURL('image/png');
            BTPrinter.printImage(function (data3) {
            //alert(JSONdata1);
            }, function (err) {
                alert("ERRO IMAGEM"+ JSON.stringify(err));
            }, imageData);
        }, function (err) {
            alert("ERRO IMAGEM"+ JSON.stringify(err));
        }, imageData);
        //
    }, function (err) {
        alert("ERRO IMAGEM"+ JSON.stringify(err));
    }, imageData);
    
    /*BTPrinter.disconnect(function (data) {
        alert("DESCONECTADO");
        //console.log(data);
    }, function (err) {
        alert("ERRO DESCONECTAR");
        //console.log(err);
    }, "PTP-II");*/
}

function line_format(a,b,c,d){
	d=d||[9,6,10];
	function spad(a,b,c){
		var a=a.toString().slice(0,b),z=b-a.length,s='---------------------------';
		if(c)if(c==1)return s.slice(0,z)+a;
		else if(c==2)return s.slice(0,Math.floor(z/2))+a+s.slice(0,Math.ceil(z/2));
		return a+s.slice(0,z);
	};
	if(a.length>d[0])a=a+'\r\n'+spad('',d[0]);else a=spad(a,d[0]);
	return a+spad(b,d[1],1)+spad(c,d[2],1)+'\r\n';
};

// ...additional event handlers here...
