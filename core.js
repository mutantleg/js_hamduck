 

//CORELIB 
 
//RANDLIB

    var randHigh = 1;
    var randLow = 5961124214214;
    
    function getRand()
    {
      randHigh = (randHigh>>2) + ( randHigh<<2);
      //randHigh += 66;
      //need to convert to integer with | 0
      //otherwise we get NaN
      randHigh = (randHigh + randLow) | 0;
      randLow += randHigh;
      
      if (randHigh == 0) {randHigh+=3;}
      
      var ret;
      ret = (randHigh % 32768) / 32768.0;
      if (ret<0.0){ ret =-ret;}
      if (ret>1.0) { ret = 1.0; }
      return ret;      
    }//getrand 
    
    function getRand2()
    {
      return getRand() - 0.5;      
    }//getrand2
    
    function setRandSeed(seed)
    {
      randHigh = seed;
      randLow = seed * 5961124214;      
    }//setRandSeed
    

//FXRANDLIB
 
    var fxRandHigh = 1;
    var fxRandLow = 5961124214214;
    
    function fxRand()
    {
      fxRandHigh = (fxRandHigh>>2) + ( fxRandHigh<<2);
      //fxRandHigh += 66;
      //need to convert to integer with | 0
      //otherwise we get NaN
      fxRandHigh = (fxRandHigh + fxRandLow) | 0;
      fxRandLow += fxRandHigh;
      
      if (fxRandHigh == 0) {fxRandHigh+=3;}
      
      var ret;
      ret = (fxRandHigh % 32768) / 32768.0;
      if (ret<0.0){ ret =-ret;}
      if (ret>1.0) { ret = 1.0; }
      return ret;      
    }//getfxRand 
    
    function fxRand2()
    {
      return fxRand() - 0.5;      
    }//getfxRand2
    
    function setFxRandSeed(seed)
    {
      fxRandHigh = seed;
      fxRandLow = seed * 5961124214;      
    }//setfxRandSeed
    
    
 //KEYLIB
 
  var vecKey = []; 
  
  var key_left =  37;    
  var key_up =    38;    
  var key_right = 39;    
  var key_down =  40;
  var key_w = 87;
  var key_a = 65;
  var key_s = 83;
  var key_d = 68;
  var key_m = 77;
  var key_n = 78;
  var key_x = 88; 
  var key_y = 89;
  var key_z = 90;
  var key_q = 81;
  var key_r = 82;
  var key_f = 70;

  var key_c = 67;
  var key_v = 86;
  
  var key_u = 85;
  var key_g = 71;
  
  //todo -- add the rest 
  //https://www.javascriptkeycode.com/
  
  
  
  
  
  var keyUp =    false;  
  var keyDown =  false;  
  var keyLeft =  false; 
  var keyRight = false;
  var keyFire =  false; 
  var keyFire2 = false;
  var keyStrafeLeft = false;
  var keyStrafeRight = false;
  var fireHold =  0;
  var fire2Hold = 0;
  var arrowHold = 0;
  var jumpHold = 0;

  var lastKey = 0;
  var keyTime = 0;
  var lastKeyId = 0;
  
  function isKdown(k) { return vecKey[k] == 1; }
  function isKeyDown(k) { return vecKey[k] == 1; }
  
  function onKeyDown(event)
  { event.preventDefault(); 
    vecKey[event.keyCode] = 1;
  }//onkdown
  
  function onKeyUp(event)
   {
     event.preventDefault(); 
     vecKey[event.keyCode] =  0; 
     lastKey = keyTime; 
     lastKeyId = event.keyCode;
     //console.log("lastkey ", lastKey, lastKeyId);
   }//onkup 
  
  document.addEventListener('keydown', onKeyDown , true);
  document.addEventListener('keyup',   onKeyUp, true);
  
  
  function clearKey()
  {
    var i;
    for (i=0;i<256;i+=1)
    { vecKey[i] = 0; }
  }//clearkey 
  
  function isAnyKeyDown()
  {
    var i;
    for (i=0;i<256;i+=1)
    {
      if (vecKey[i] == 1) { return true; }
    }
    return false;
  }//anydown
  
  
  var k_kup = key_w; 
  var k_kup_alt = key_up;
  
  var k_kdown = key_s; 
  var k_kdown_alt = key_down;
  
  var k_kleft= key_a; 
  var k_kleft_alt = key_left;
  
  var k_kright= key_d; 
  var k_kright_alt = key_right;

  var k_kfire = key_z; 
  var k_kfire_alt = key_y;

  var k_kfire2 = key_x; 
  var k_kfire2_alt = key_c;

  
  function resetKeys()
  {
    /*
    k_kup = key_w; 
    k_kup_alt = key_up;
  
    k_kdown = key_s; 
    k_kdown_alt = key_down;
  
    k_kleft= key_a; 
    k_kleft_alt = key_left;
  
    k_kright= key_d; 
    k_kright_alt = key_right;
    */
    k_kup_alt = 0;
    k_kdown_alt = 0;
    k_kleft_alt = 0; 
    k_kright_alt = 0;
    
    k_kup = key_up;
    k_kdown = key_down;
    k_kleft = key_left; 
    k_kright = key_right;
    
     k_kfire = key_z; 
     k_kfire_alt = key_y;

    k_kfire2 = key_x; 
    k_kfire2_alt = key_c;
        
  }//reset 
   
   
   
   var knames = {};
    knames[37] = "Left";
    knames[38] = "Up";
    knames[39] = "Right";
    knames[40] = "Down";
    
    function getKname(k)
    { 
      var ret;
      if (knames == undefined)
      {
        knames = {};
          knames[37] = "Left";
          knames[38] = "Up";
          knames[39] = "Right";
          knames[40] = "Down";
      }
       ret= knames[k]; 
      if (ret != undefined){return ret; }

      ret = String.fromCharCode(k);
     // console.log("ret ", ret);
     return ret;
    }//getkname
    
    function isKeyAllowed(k)
    {
      if (k > 250) { return false;}
      if (k == 80) { return false; } //P
      if (k == 27) { return false; } //ESC
      
      if (k > 222) { return false; }
      
      
      return true;
    }//iskallowed
     
   
  function keyCheck()
  {      

     keyStrafeLeft = isKdown(key_a);
     keyStrafeRight = isKdown(key_d);
     
     keyUp =    (isKdown(k_kup) || isKdown(k_kup_alt));
     keyDown =  (isKdown(k_kdown) || isKdown(k_kdown_alt));
     keyLeft =  (isKdown(k_kleft) || isKdown(k_kleft_alt));
     keyRight = (isKdown(k_kright) || isKdown(k_kright_alt));
     
     keyFire =  (isKdown(k_kfire) || isKdown(k_kfire_alt)); //(isKdown(key_n) || isKdown(key_z)||isKdown(key_y) ||isKdown(key_q));
     keyFire2 = (isKdown(k_kfire2) || isKdown(k_kfire2_alt)); //(isKdown(key_m) || isKdown(key_x) );
     
     if (keyUp||keyDown||keyLeft||keyRight) { arrowHold += 1; }
     else { arrowHold = 0; }
     
     if (keyFire) { fireHold += 1; }
     else { fireHold = 0; }
     
     if (keyFire2) { fire2Hold += 1; }
     else { fire2Hold = 0; }
     
     
     if (keyFire || keyUp) { jumpHold += 1; }
     else { jumpHold = 0; }
     
       
  }//keycheck

  
//RATLIB

    var mousex=0; var mousey=0;   //mouse coordinates
    var mbutton = 0;  //mouse left is down (1) or up (0)
    var mhold = 0;
    var mpress = 0;
    var mdelay = 0;
    var vmx = 0; var vmy = 0; //virtual mouse coordinates 
    var pmx = 0; var pmy = 0; //previous mouse coord 
    var mvx = 0; var mvy = 0;
    var mouseLook = false;
    var mouseSpeed = 1.0;
    
    
    function mouseUpdate()
    {
      if (mdelay > 0)
      {
        mdelay -= 1;
        mhold =0; mpress=0; mbutton = 0;        
        return;
      }//endif 
      
      mpress = 0; 
      if (mbutton > 0) { mhold += 1; }
      else { if (mhold>0){mpress=1;} mhold = 0; }
      
    }//mouseupdate 
          
    //EVENT LISTENERS
     var c = document.getElementById("myCanvas");
       c.addEventListener('mousemove', onMouseMove );          
       c.addEventListener('mouseup', function(e){ mbutton = 0; onMup(); } );
       c.addEventListener('mousedown', function(e){ mbutton = 1; onMdown(); } ); 
       c.addEventListener('mouseleave', function(e){ mbutton = 0; onMup(); } );

       document.addEventListener('mousemove', onLockMove );          

      function onMdown()
      {           
        if (mouseLook==false){mbutton=0;}
      }//onmdown
      
      function onMup()              
      {

      }//onmup
              
      function onMouseMove(e)
      {                
       //get the mouse coordinates inside the canvas
       var c = document.getElementById("myCanvas");
       var r = c.getBoundingClientRect();
        mousex = Math.round((e.clientX-r.left)/(r.right-r.left)*c.width );
        mousey = Math.round((e.clientY-r.top)/(r.bottom-r.top)*c.height );

        //vmx = mousex;        vmy = mousey;
      }//onMouseMove
      
      function onLockMove(e)
      {
        //console.log(" document mousemove  ",gt, " xy  ", e.movementX, e.movementY)

       if (mouseLook)
       {    
        vmx += e.movementX;
        vmy += e.movementY;
       }//endif 
      }//onlockmove
      
      function wrapMouse()
      {
        
        mvx = pmx - vmx;
        mvy = pmy - vmy;
        
        mvx *= mouseSpeed;
        mvy *= mouseSpeed;
        
        
         if (vmx < 0)    { vmx += 320;    }
         if (vmx > 320)  { vmx -= 320;    }
         if (vmy < 0)    { vmy += 240;    }
         if (vmy > 240)  { vmy -= 240;    }
        
        pmx = vmx;
        pmy = vmy;
           
      }//wrapmouse
      
      function limitMouse()
      {
        mvx = pmx - vmx;
        mvy = pmy - vmy;
        
        mvx *= mouseSpeed;
        mvy *= mouseSpeed;
        
        
         if (vmx < 0)    { vmx = 0;    }
         if (vmx > 320)  { vmx = 320;  }
         if (vmy < 0)    { vmy = 0;    }
         if (vmy > 240)  { vmy = 240;  }
        
        pmx = vmx;
        pmy = vmy;
        
        
      }//limitmouse 
      
      
          
      var canvas=document.getElementById("myCanvas");    
      canvas.requestPointerLock = canvas.requestPointerLock ||
                                  canvas.mozRequestPointerLock;

      document.exitPointerLock = document.exitPointerLock ||
                                 document.mozExitPointerLock;

      canvas.onclick = function() { canvas.requestPointerLock(); };
      
      
      document.addEventListener('pointerlockchange', onLockChange, false);
      document.addEventListener('mozpointerlockchange', onLockChange, false);

      function onLockChange()
      { 
        if (document.pointerLockElement === canvas || document.mozPointerLockElement === canvas) 
        { console.log("lock is on ", gt);
         if (mouseLook == false) { mdelay=6;  }
          mouseLook = true;
        }
        else 
        { console.log("lock is off ", gt); mouseLook = false;  mdelay=6;  }
              
      }//onlockchange
      

//SPRLIB


//https://developer.mozilla.org/en-US/docs/Web/API/ImageData
//imagedata is     width   height     data   (data is Uint8ClampedArray )

  // https://stackoverflow.com/questions/10754661/javascript-getting-imagedata-without-canvas
  //thanks to chrome we cannot do this

  var sprImage;
  var vecSpr = [];

   //loading the image itself is blocked .. 
  function loadImageToSpr(imgName)
  {
    var img= new Image();    
    img.src = imgName;
    img.crossOrigin = "Anonymous"; //doesnt work
    img.onload = function()  
    {
      console.log("image loaded ", sprImage);
    }
    sprImage = img;
  }//loadimagetoskin
  
  function loadImage(imgName)
  {
    var img= new Image();    
    img.src = imgName;
    img.crossOrigin = "Anonymous"; //doesnt work
    img.onload = function()  
    {
      console.log("image loaded ", this);
    }
    return img;
  }//loadimage 
  
  
  //ImageData { width: 256, height: 256, data: Uint8ClampedArray(262144) }
  function getImageAsData(img)
  {
   var canvas = document.createElement('canvas');
   var context = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0 );
    var myData = context.getImageData(0, 0, img.width, img.height);
   return myData;   
  }//getasdata

  
  function getSpr(spname)
  {
    var a;
    a = vecSpr[spname];
    return a;
  }//getspr
  
  function drawSpr(spname, ax, ay)
  {
    var a;
    a = vecSpr[spname];
    if ( a == undefined) { return; }
    
    ctx.drawImage(sprImage,  a.x,a.y,a.sw,a.sh, 
    ax-a.sw*0.5, ay-a.sh*0.5,  a.sw, a.sh);
  }//drawspr 
  
  // ang     -- angle in radians  (to deg: 45*(3.1415/180.0) )
  // scx scy -- scale  e.g. scx -1 for mirror horizontally
  function drawSprAdv(spname, ax, ay, ang, scx, scy)
  {
    a = vecSpr[spname];
    if ( a == undefined) { return; }
    ctx.save();
    ctx.translate(ax|0, ay|0);
    ctx.rotate(ang);
    ctx.scale(scx, scy);
    ctx.drawImage(sprImage,  a.x, a.y,a.sw,a.sh, 
    -a.sw*0.5, -a.sh*0.5,  a.sw, a.sh);
    ctx.restore();
  }//drawspradv
  
  
  //instead of scale use fixed size 
  function drawSprAdv3(spname, ax, ay, ang, sx, sy)
  {
    a = vecSpr[spname];
    if ( a == undefined) { return; }
    ctx.save();
    ctx.translate(ax|0, ay|0);
    ctx.rotate(ang);
    //ctx.scale(scx, scy);
    ctx.drawImage(sprImage,  a.x, a.y,a.sw,a.sh, 
    -sx*0.5, -sy*0.5,  sx, sy);
    ctx.restore();
  }//drawspradv
  

  
  function drawSprRect(spname, ax, ay, aw, ah)
  {
    a = vecSpr[spname];
    if ( a == undefined) { return; }
    
    ctx.drawImage(sprImage,  a.x,a.y,a.sw,a.sh, 
    ax, ay,  aw, ah);
  }//drawsprrect
  
//FULLSCREENLIB


//https://www.w3schools.com/howto/howto_js_fullscreen.asp

function openFullscreen() {
  var elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { // Firefox 
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera 
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { // IE/Edge 
    elem.msRequestFullscreen();
  }
}//openFullscreen

function closeFullscreen() {
  var elem = document.documentElement;
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { // Firefox 
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera 
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { // IE/Edge 
    document.msExitFullscreen();
  }
}//closeFullscreen


//SOUNDLIB



 //there doesnt seem to be default panning .. making 3D sounds tricky 
 //(it seems every browser has a different way to do it .. nice)

 var vecSnd = {};
 
 var curMus;
 var mastVol = 1.0;
 var sndVol = 1.0;
 var musVol = 0.25;
 var muteVol = 1.0; // 0.0 to mute 
 
 //listener pos 
 var listx = 0.0;
 var listy = 0.0;
 var listz = 0.0;
 var listDist = 512.0;
 
 function setListen(ax,ay,az)
 { listx=ax;listy=ay;listz=az; }
 
 function resetVol()
 {
   mastVol = 1.0;
   sndVol = 1.0;
   musVol = 0.25;

 }//resetvol
 
 
 function pauseAllSnd()
 {
  // console.log("vecsnd ", vecSnd); 
   var a;
   for (var i in vecSnd) {
    //console.log("vecsnd i ", i, vecSnd[i]);
    a = vecSnd[i];
    a.pause();
   }//nexti 
 }//pauseall 
 
 function resumeAllSnd()
 {
   /*
   for (var i in vecSnd) {
    a = vecSnd[i];
    if (a.paused) //not a good indicator 
    { a.play(); }
   }//nexti */
   if (curMus != undefined)
   { curMus.play(); }
   
 }//resumeallsnd 
 
 function loadSound(srcName, sndName, npool)
 {
  var aud =  new Audio(srcName);
   aud.autoplay = false; 
   vecSnd[sndName] = aud;   
   
   var i; var num;
   num = npool
   if (num == undefined) { return; }
   if (num < 1) { num = 1; }
   if (num > 8) { num = 8;}
   for (i=0;i<num;i+=1)
   {
    var a; a = new Audio(srcName);
    vecSnd[sndName+"_alt"+i] = a;
   }//nexti 
 }//loadsound 
 
 
 function getSnd(sndName)
 {
   var a;    var i; 
   a = vecSnd[sndName];
   if (a==undefined) { return undefined; }
   //console.log(gt,"getsnd ",sndName, a.currentTime, a.duration);
   if (a.currentTime <= 0 || a.currentTime >= a.duration || a.paused) { return a; }
   for (i=0;i<8;i+=1)
   {
    a = vecSnd[sndName+"_alt"+i];
      if (a == undefined) { continue; }    
     if (a.currentTime <= 0 || a.currentTime >= a.duration || a.paused) { return a; }     
    //console.log(gt,"alt ",i,a.currentTime);
   }//nexti 
   //a = vecSnd[sndName];
   return a;
 }//getsnd  
 
 
 function playSnd(sndName, vol)
 {
   var a;
   //a = vecSnd[sndName];
   a = getSnd(sndName);
   if (a==undefined) { return; }
   if (muteVol < 1) { return; }
      
   a.currentTime = 0.0001;
   a.loop = false;
   a.volume = vol * mastVol * sndVol * muteVol;
   a.play();
  // console.log("playsnd a ",gt, a);
 }//playsound
 
 function sndMag3(ax,ay,az)
 { return Math.sqrt(ax*ax+ay*ay+az*az); }
 
 function playSnd3(sndName, vol, ax, ay, az)
 {
   var a;
  // a = vecSnd[sndName];
   a = getSnd(sndName);
   if (a==undefined) { return; }
   if (muteVol < 1) { return; }
   
   var d;
   d = sndMag3(listx-ax, listy-ay, listz-az);
   d = 1.0 - ( d / listDist);
    if (d < 0.0) { d = 0.0; }
    if (d > 1.0) { d = 1.0; }
    if (d <= 0.0) { return; }
   
   vol *= d;   
   
   a.loop = false;
   a.volume = vol * mastVol * sndVol * muteVol;
   if (a.paused) { a.play(); }
   else { a.currentTime = 0; }
 }//playsnd3
 
 
 function recalMusVol()
 {
   if (curMus == undefined) { return; }
   curMus.volume = 1.0 * mastVol * musVol * muteVol;
    
 }//recalmus 
 
 function playMus(sndName)
 {
   var a;
   a = vecSnd[sndName];
   if (a==undefined) { return; }
   
   if (curMus != undefined)
   { curMus.stop(); }
   curMus = a; 
   
   a.loop = true;
   a.volume = 1.0 * mastVol * musVol * muteVol;
   a.play();
 }//playmus 









 



    
       
      
      
      
