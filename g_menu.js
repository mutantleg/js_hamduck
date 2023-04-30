

  var paused = false;

//note -- key names are also used for saving and display 
//todo -- variable for display name 
  var k_upName =     "Up";
  var k_downName =   "Down";
  var k_leftName =   "Left";
  var k_rightName =  "Right";
  var k_fireName =   "Jump";
  var k_fire2Name =  "Fire";
  
  var hasFire1 = false;
  var hasFire2 = false; 

  var k_showAimConf = false;
  var k_showVidConf = false; 
  var k_showMusConf = true; 
  
  var firstMenu = true;
  
var font8x8png = "data:image/png;base64,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";

var font10x12png = "data:image/png;base64,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";


//  var fontImage = loadImage(fontsprpng);
  var smallFont = loadImage(font8x8png);
//  var bigFont = loadImage("font10x12.png");
  var bigFont = loadImage(font10x12png);
  
  var titleImg = loadImage(titlepng);

  var btnPush = -1;
  var btnOver = -1;
  var btnFocus = -1; 
  var btnValue = 0;
  var btnDisable = -1;
  var menuState = 0;
  var optState = 0;
  var keyPrompt = 0;

 function resetBtn()
  {
   btnPush = -1;
   btnOver = -1;  
    //btnFocus = -1; 
    btnValue = 1.0;
    btnDisable = -1;
  }//resetbtn 
  
  /*
 // var firstfont = true;
  function drawFont(ax, ay, aw, ah, str)
  {
    var i, num; var a;
    //var aw, ah;    aw = 8; ah = 8;
    num = str.length;
    for (i=0;i<num;i+=1)
    {
      a = vecSpr[str[i]];
      //if (firstfont) { console.log("str i ", i, str[i], a); }
     // if ( a == undefined) { ax+=aw; continue; }
      if (str[i] == " ")  { ax+=aw; continue; }
      if ( a== undefined) { a = vecSpr["?"]; }
      ctx.drawImage(fontImage, a.x,a.y,a.sw,a.sh,     ax, ay,  aw, ah);
      ax += aw;  
    } //nexti 
   // firstfont = false;
  }//drawfont 
  */


  function sprBtn(id, str, ax, ay, aw, ah)
  {
    var over;
    over = (vmx<ax||vmx>=ax+aw||vmy<ay||vmy>=ay+ah) == false;
    if (btnDisable == 1) { over = false; }
    if (over && mhold == 1) { mhold = 3; btnFocus = id; }
    if (btnFocus == id) { ax += 1; ay+= 1; }
  
    drawSprRect(str, ax,ay,aw,ah);

    //if (over && btnFocus < 0) { ctx.fillStyle = btnColor3; }
    //ctx.fillRect(ax,ay,aw,ah);

    if (over && btnFocus == id && mpress == 1)
    { btnPush = id; }

  }//sprbtn
  
  function drawFont(ax, ay, sw,sh,  str)
  {
    var i, num; var a;
    var aw, ah; var sx;
    aw = 8; ah = 8; sx = ax;
    num = str.length;
    for (i=0;i<num;i+=1)
    {
      //a = vecSpr[str[i]];
       a = str.charCodeAt(i);
      if (str[i] == " ")  { ax+=aw; continue; }
      if (a == 10) { ax = sx; ay+=ah; continue; } // \n
      fx = Math.floor(((a % 16)|0) * aw);
      fy = Math.floor(((a / 16)|0) * ah);
      ctx.drawImage(smallFont, fx,fy, aw,ah,     ax, ay,  sw, sh);
      ax += aw;  
    } //nexti 
  }//drawfont3 
  
  function drawFont3(ax, ay,  str)
  {
    var i, num; var a;
    var aw, ah;  var sx;
    aw = 10; ah = 12; sx = ax;
    num = str.length;
    for (i=0;i<num;i+=1)
    {
      //a = vecSpr[str[i]];
       a = str.charCodeAt(i);
      if (str[i] == " ")  { ax+=aw; continue; }
      if (a == 10) { ax = sx; ay+=ah; continue; } // \n
      fx = Math.floor(((a % 16)|0) * aw);
      fy = Math.floor(((a / 16)|0) * ah);
      ctx.drawImage(bigFont, fx,fy, aw,ah,     ax, ay,  aw, ah);
      ax += aw;  
    } //nexti 
  }//drawfont3 
  
  
  
  function drawFont3Scale(ax, ay, wx,wy,  str)
  {
    var i, num; var a;
    var aw, ah;  var sx;
    aw = 10; ah = 12; sx = ax;
    num = str.length;
    for (i=0;i<num;i+=1)
    {
      //a = vecSpr[str[i]];
       a = str.charCodeAt(i);
      if (str[i] == " ")  { ax+=aw*wx; continue; }
      if (a == 10) { ax = sx; ay+=ah*wy; continue; } // \n
      fx = Math.floor(((a % 16)|0) * aw);
      fy = Math.floor(((a / 16)|0) * ah);
      ctx.drawImage(bigFont, fx,fy, aw,ah,     ax, ay,  aw*wx, ah*wy);
      ax += aw*wx;  
    } //nexti 
  }//drawfont3 
  
  
  function drawLabel(ax,ay, size, str)
  {
    drawFont(ax,ay,size,size, str);
  }//drawlabel 
 
 function drawLabel3(ax,ay,  str)
  {
    drawFont3(ax,ay, str);
  }//drawlabel 
 
 
  var btnColor = "#808080";
  var btnColor3 = "#b0b0b0";
  
  function resetBtnCol()
  { btnColor = "#808080"; btnColor3 = "#b0b0b0"; }

  function setBtnColA()
  { btnColor = "#3030a0"; btnColor3 = "#6060b0"; }
  
  
  function isOver(ax, ay, aw, ah)
  {
    var over;
    over = (vmx<ax||vmx>=ax+aw||vmy<ay||vmy>=ay+ah) == false;
    if (btnDisable == 1) { over = false; }
    return over;
  }//isover 
  
  //drawbutton
  function drawBtn(id, ax, ay, aw, ah, str)
  {
    var over;
    over = (vmx<ax||vmx>=ax+aw||vmy<ay||vmy>=ay+ah) == false;
    if (btnDisable == 1) { over = false; }

    if (over && mhold == 1) { btnFocus = id; }
    if (btnFocus == id) { ax += 1; ay+= 1; }
    
    var btnSpr = undefined;
    var btnSprName = "none";
    
    if (aw==64&&ah==16)  { btnSprName = "btn64x16";  if (over && btnFocus < 0) { btnSprName+="over"; }  }
    if (aw==48&&ah==16)  { btnSprName = "btn48x16";  if (over && btnFocus < 0) { btnSprName+="over"; }  }
    if (aw==144&&ah==24)  { btnSprName = "btn144x24";  if (over && btnFocus < 0) { btnSprName+="over"; }  }
    
    btnSpr = getSpr(btnSprName);
    if (btnSpr != undefined)
    {
      drawSpr(btnSprName, ax+aw*0.5, ay+ah*0.5);
    }//endif 
   
    
    if (btnSpr == undefined)
    {
     ctx.fillStyle = "#000000";
     ctx.fillRect(ax-1,ay-1,aw+2,ah+2);
     ctx.fillStyle = btnColor;
     if (over && btnFocus < 0) { ctx.fillStyle = btnColor3; }
     ctx.fillRect(ax,ay,aw,ah);
    }//endif 
    
    var size;
    size = ah*0.5; //16
    var d;
    d = (str.length)* 10 * 0.5; // (size*0.5);
    //drawFont(ax+(aw*0.5)-d,ay+ah*0.5-(size*0.5),size,size, str);
    drawFont3(ax+(aw*0.5)-d, ay+ah*0.5-(size*0.5)-2, str);
        
    if (over && btnFocus == id && mpress == 1)
    { btnPush = id;
      
      if (firstMenu==false)
      {
       if(str=="Continue") {playSnd("snd13", 1); }
       else { playSnd("snd12", 1); }
      }//endif3
    }//endif 
  }//drawbtn 
  
  var slidPrev = 0;
  var sliderColor = "#30f030";
  function drawSlider(id, ax, ay, aw, ah, t)
  {
    var over;
    over = (vmx<ax||vmx>=ax+aw||vmy<ay||vmy>=ay+ah) == false;
    if (btnDisable == 1) { over = false; }

    
    var rx; var u;
    rx = vmx - ax;
    if (rx < 0) { rx = 0; }
    if (rx > aw) { rx = aw; }
    
    u = rx / aw; 
 
    if (over && mhold == 1)    { btnFocus = id; slidPrev = u; }

    if (btnFocus == id) { t = u; }
    btnValue = t;
     
    ctx.fillStyle = "#000000";
    ctx.fillRect(ax-1,ay-1,aw+2,ah+2);
    ctx.fillStyle = "#303030";
    ctx.fillRect(ax,ay,aw,ah);
    ctx.fillStyle = sliderColor;
    ctx.fillRect(ax,ay,aw*t,ah);
    

//    if (btnFocus == id && mpress == 1) { btnPush = id;  btnValue = u; }
   // if (btnFocus == id && mhold > 0 && slidPrev != u) { btnPush = id;  btnValue = u; }
    if (btnFocus == id && mhold > 0) { btnPush = id;  btnValue = u; }
    

    if (btnFocus > 0 && btnFocus != id) { return; }
    if (over || btnFocus == id)
    {
     ctx.fillStyle = "#000000";
     ctx.fillRect(ax+aw*u,ay,3, ah);
    }
   
   
   //return u;
  }//drawslider 
 
  function setKeyBtn(kname, key)
  {
    if (kname == k_leftName)      { k_kleft = key;      return; }
    if (kname == k_leftName+ " Alt")  { k_kleft_alt = key;  return; }
    if (kname == k_rightName)     { k_kright = key;     return; }
    if (kname == k_rightName+" Alt") { k_kright_alt = key;return; }

    if (kname == k_upName)      { k_kup = key;         return; }
    if (kname == k_upName+ " Alt")  { k_kup_alt = key;     return; }
    if (kname == k_downName)     { k_kdown = key;       return; }
    if (kname == k_downName+ " Alt") { k_kdown_alt = key;   return; }

    if (kname == k_fireName)     { k_kfire = key;       return; }
    if (kname == k_fireName+ " Alt") { k_kfire_alt = key;   return; }

    if (kname == k_fire2Name)     { k_kfire2 = key;       return; }
    if (kname == k_fire2Name+ " Alt") { k_kfire2_alt = key;   return; }
    
  }//setkeybtn
    
  function setKey(kname, key)
  {      
    setKeyBtn(kname, key);
    saveConfig();
  }//setkey 
  

 // menuState = 1; //debug 
 // optState = 1;
 
 
 var hideRat = 0; 
 
  function drawRat()
  {
    if (paused == false) 
    {
      if (Math.abs(mvx)>1 || Math.abs(mvy>1)) { hideRat = 0; }
      hideRat += 1; if (hideRat > 70) { return; }  
    }//endif 
    
    if (mbutton == 1)
    { drawSpr("pointer3",vmx+4,vmy+7); return; }
    drawSpr("pointer",vmx+4,vmy+7);

    /*
          //console.log("reach ", keyTime);
      //need a cursor sprite 
      ctx.fillStyle = "#000000";
      ctx.fillRect(vmx,vmy,3,3);
      ctx.fillStyle = "#ff2fff";
      ctx.fillRect(vmx-1,vmy-1,3,3);
    */
  }//drawrat
   
  function drawMenu()
  {
     if (paused == false) { drawRat(); return; }

     
     ctx.fillStyle = "#000000a0";      
       ctx.fillRect(0, 0, 320, 240);
 
 
      
       resetBtn(); resetBtnCol();

       if (keyPrompt == 1)
       { btnDisable = 1; }
       
       if (mbutton == 0 && mpress == 0){btnFocus = -1; }
 
       var ax, ay;
       
       //after game loaded 
         if (firstMenu && (bDebug == false))
         {
           menuState = 1;
           //ctx.fillStyle = "#000000ff";      
           // ctx.fillRect(0, 0, 320, 240);
           if (titleImg != undefined)
           { ctx.drawImage(titleImg, 0,0,320,240,     0,0,320,240,); }
            
           ax = 160 - 64; ay = 240-48;
           drawBtn(310, ax,ay, 128+16, 16, "Play!"); ay+=24;
           drawBtn(320, ax-64+8,ay, 256, 16, "Play - No sound please!"); ay+=24;

           if (btnPush == 310) { paused = false;  menuState = 0; firstMenu = false;  }
           if (btnPush == 320) { paused = false;  menuState = 0; firstMenu = false; muteVol = 0.0; }

            drawRat();

          return; 
         }//endif   
         
     if (menuState != 0)
     {  drawSpr("menuback", 40+120, 40+100 );  }
            
     if (menuState == 0)
     {

      if (inFocus)       
      { drawFont3Scale(110,40, 2,2, "PAUSED"); }

        ax = 160 - 64; ay = 120;
       if (isOver(ax,ay, 128+16, 24)) { canLock = keyTime; }
       drawBtn(10, ax,ay, 128+16, 24, "Continue"); ay+=32;
       drawBtn(20, ax,ay, 128+16, 24, "Options"); ay+=32;
       
       if (btnPush == 10) { paused = false; }
       if (btnPush == 20) { menuState = 1; }

     }
     else if (menuState == 1)
     {
       ax = 16; ay = 16;
       
       drawBtn(10, ax,ay, 64, 16, "Back"); ax+=70;
       resetBtnCol(); if (optState == 0) { setBtnColA(); }
       drawBtn(15, ax,ay, 64, 16, "Sound"); ax+=70;
       resetBtnCol(); if (optState == 1) { setBtnColA(); }
       drawBtn(20, ax,ay, 64, 16, "Keys"); ax+=70;
       resetBtnCol(); if (optState == 2) { setBtnColA(); }
       if (k_showVidConf)
       {
       drawBtn(25, ax,ay, 64, 16, "Video"); ax+=70;
       resetBtnCol();
       }
       
       if (btnPush == 10) { menuState = 0; }
       if (btnPush == 15) { optState = 0;  }
       if (btnPush == 20) { optState = 1;  }
       if (btnPush == 25) { optState = 2;  }
       
       
        if (optState == 2)
        {
         ax = 160 - 64; ay = 64;
         ay+=8;
          drawLabel(ax,ay, 8, "Framerate:");

          ay+=16;   
          
          resetBtnCol(); if (frameSkip == 0) { setBtnColA(); }
          drawBtn(80, ax,ay, 128, 16, "60 FPS"); ay += 24;
          resetBtnCol(); if (frameSkip == 1) { setBtnColA(); }
          drawBtn(85, ax,ay, 128, 16, "30 FPS"); ay += 24;
          resetBtnCol(); if (frameSkip == 2) { setBtnColA(); }
          drawBtn(90, ax,ay, 128, 16, "15 FPS"); ay += 24;
          
          if (btnPush == 80)  { frameSkip = 0; }
          if (btnPush == 85)  { frameSkip = 1; }
          if (btnPush == 90)  { frameSkip = 2; }
        
          if (btnPush > 0)   { saveConfig(); }
        }//endif3 
       
        if (optState == 1)
        {
          
          if (k_showAimConf)
          {
             ax = 48; ay = 48;
             ay+=8;
             sliderColor = "#3030f0";
             var ms;
             ms = mouseSpeed * 0.5;
             drawSlider(50, ax,ay, 128, 16, ms);
             drawLabel(ax,ay-8-2, 8, "Aim Speed "+((btnValue*100*2)|0)+"%" );     
             if (btnPush == 50)  { mouseSpeed = btnValue * 2.0;  }
       
             ax+=128+32;   
             drawBtn(80, ax,ay, 100, 16, "RESET AIM");
             if (btnPush == 80)  { mouseSpeed = 1.0;   }
             if (btnPush > 0)   { saveConfig(); }
          }//endif3
              
          
          ax = 48; ay += 32;
          

            
            drawLabel3(ax,ay+4,  k_upName);  
            drawBtn(300, ax+128, ay, 48, 16, ""+getKname(k_kup));
            drawBtn(305, ax+128+64, ay, 48, 16, ""+getKname(k_kup_alt));  ay += 20;
            if (btnPush == 300) { keyPrompt = 1; keyName = k_upName; }
            if (btnPush == 305) { keyPrompt = 1; keyName = k_upName+" Alt"; }
            
            drawLabel3(ax,ay+4,  k_downName);  
            drawBtn(400, ax+128, ay, 48, 16, ""+getKname(k_kdown));
            drawBtn(405, ax+128+64, ay, 48, 16, ""+getKname(k_kdown_alt));  ay += 20;
            if (btnPush == 400) { keyPrompt = 1; keyName = k_downName; }
            if (btnPush == 405) { keyPrompt = 1; keyName = k_downName+" Alt"; }
                     
            drawLabel3(ax,ay+4,  k_leftName);  
            drawBtn(100, ax+128, ay, 48, 16, ""+getKname(k_kleft));
            drawBtn(105, ax+128+64, ay, 48, 16, ""+getKname(k_kleft_alt));   ay += 20;
            if (btnPush == 100) { keyPrompt = 1; keyName = k_leftName; }
            if (btnPush == 105) { keyPrompt = 1; keyName = k_leftName+" Alt"; }
            
            drawLabel3(ax,ay+4,  k_rightName);  
            drawBtn(200, ax+128, ay, 48, 16, ""+getKname(k_kright));
            drawBtn(205, ax+128+64, ay, 48, 16, ""+getKname(k_kright_alt));  ay += 20;
            if (btnPush == 200) { keyPrompt = 1; keyName = k_rightName; }
            if (btnPush == 205) { keyPrompt = 1; keyName = k_rightName+" Alt"; }
            
            if (hasFire1)
            {
              drawLabel3(ax,ay+4,  k_fireName);  
              drawBtn(500, ax+128, ay, 48, 16, ""+getKname(k_kfire));
              drawBtn(505, ax+128+64, ay, 48, 16, ""+getKname(k_kfire_alt));  ay += 20;
              if (btnPush == 500) { keyPrompt = 1; keyName = k_fireName; }
              if (btnPush == 505) { keyPrompt = 1; keyName = k_fireName+" Alt"; }
            }//endif3

            if (hasFire2)
            {
              drawLabel3(ax,ay+4,  k_fire2Name);  
              drawBtn(550, ax+128, ay, 48, 16, ""+getKname(k_kfire2));
              drawBtn(555, ax+128+64, ay, 48, 16, ""+getKname(k_kfire2_alt));  ay += 20;
              if (btnPush == 550) { keyPrompt = 1; keyName = k_fire2Name; }
              if (btnPush == 555) { keyPrompt = 1; keyName = k_fire2Name+" Alt"; }
            }//endif3 
          
          
          ay += 32; ax+=64;
          drawBtn(8000, ax,ay, 144, 24, "RESET KEYS");
          if (btnPush == 8000) { resetKeys(); saveConfig(); }
          
          
              if (keyPrompt == 1)
              {
               btnPush = -1;
              
              ctx.fillStyle = "#000000a8";
              ctx.fillRect(0,0,320,240);
              
              ctx.fillStyle = "#000000"
              ctx.fillRect(60-2,80-2,196+4,64+4);
              
              ctx.fillStyle = "#505050"
              ctx.fillRect(60,80,196,64);
              
                btnDisable = -1;
                ax = 80; ay = 88;
                drawLabel(ax,ay, 8, "Press key for: ");  ay+=16;
                drawLabel(ax,ay, 8, keyName); ay+=16;
              
                drawBtn(5300, ax, ay, 64, 16, "Cancel");
                drawBtn(5310, ax+64+16, ay, 64, 16, "Unbind");
                
                if (btnPush == 5300)  { keyPrompt = 0;   }
                if (btnPush == 5310)  { keyPrompt = 0;  setKey(keyName, 0);   }
                if (mouseLook == false) { keyPrompt = 0; }
                
                if (lastKey == keyTime-1 && lastKeyId == 27) { keyPrompt = 0; }
                else 
                if (lastKey == keyTime-1 && isKeyAllowed(lastKeyId) )
                { keyPrompt = 0;  setKey(keyName, lastKeyId); }
              
              }//endif5
         
        
        }//endif3
       
       
        if (optState == 0)
        {
         if (muteVol > 0.1) { sliderColor = "#30f030"; }
         else { sliderColor = "#f03030";  }    

        ax = 160 - 64; ay = 64;
        if (k_showMusConf)
        {          
         ay+=8;
         drawSlider(50, ax,ay, 128, 12, mastVol);
         drawLabel(ax,ay-8-2, 8, "Master Volume "+((btnValue*100)|0)+"%" );     
         if (btnPush == 50)  { mastVol = btnValue; }
        
         ay+=32;
         drawSlider(60, ax,ay, 128, 12, musVol);
         drawLabel(ax,ay-8-2, 8, "Music Volume "+((btnValue*100)|0)+"%" );     
         if (btnPush == 60)  { musVol = btnValue; }
        }//endif
        
         ay+=32;
         drawSlider(70, ax,ay, 128, 12, sndVol);
         drawLabel(ax,ay-8-2, 8, "Sound Volume "+((btnValue*100)|0)+"%" );     
         if (btnPush == 70)  { sndVol = btnValue; }


          ay+=32;
          if (muteVol > 0.1) {  drawBtn(80, ax,ay, 64, 16, "MUTE");  }
          else {  drawBtn(80, ax,ay, 64, 16, "UNMUTE");  }
          
          drawBtn(81, ax+70,ay, 64, 16, "RESET");
          if (btnPush == 81) { resetVol(); saveConfig(); }
          
          if (btnPush == 80) 
          { if (muteVol>0){muteVol=0.0;}else{muteVol=1.0;} } 

          if (btnPush == 50 || btnPush == 60 || btnPush==80)  { recalMusVol(); }
          
          if (btnPush > 0)   { saveConfig(); }
        }//endif3
        
     }//endif 
       
    drawRat();
  }//drawmenu 
   
  