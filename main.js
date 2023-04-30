



  var lastFpsTime = Date.now();
  var curFps = 0;
  var appTime = 0;
  function countFps()
  {
    appTime += 1;
    d = (Date.now() - lastFpsTime)/1000;
    lastFpsTime = Date.now();
    if (appTime % 5 == 0)
    { curFps = (1.0 / d) | 0; }
  }//countfps
    
  var inFocus = false;
  var prevPaused = false; 
  var prevFocus = false;
  

  function resetGame()
  {
    gt = 0;
    gameOver = 0;
    setRandSeed(1000);
  
  }//resetgame
  
  
  
  function init()
  {
    console.log("init");

    //r_imgdata backdrop
    //320x240 resolution
    
    clearDataPix(128,64,64);
    
    //todo -- turn all sounds to be in a single .js 
    
    
    //add new sprite 
    //copy image into spr8 dir 
    //run makesp 

    loadImageToSpr(spr8png);
    
    //add new sound 
    //copy over mp3
    //add mp3 in makesp.bat 
    //run makesp bat 
    //add sound here     
    
    //loadSound(snd1mp3, "snd1", 3);
    loadSound(snd3mp3, "snd3", 3);
    loadSound(snd5mp3, "snd5", 8);

    resetKeys();
    loadConfig();
    
    resetGame();
        
    loadSound("bgm.mp3", "bgm");
    playMus("bgm", 0.5);    
        
  }//init
  
 

    
  function controls()
  {

    mouseUpdate();
    keyCheck(); 
    limitMouse(0,0,320,240);
      
    inFocus = (mouseLook == true);
    if (inFocus == false) 
    {
      if (paused==false) { pauseAllSnd();}
      paused = true; 
      clearKey();
    }//endif

    keyTime += 1;
    if (lastKey == keyTime-1 && inFocus) 
    {
      //f (lastKeyId!=27) { paused = false; }
      //P
      if (lastKeyId==80) { paused = !paused; }
    }//endif
    
    
    if (prevPaused != paused)
    {
      prevPaused = paused;
      //if (paused) { pauseAllSnd(); }
     // else { resumeAllSnd(); }
    }//endif 
    
   if (prevFocus != inFocus)
    {
      prevFocus = inFocus;
      if (inFocus == false) { pauseAllSnd(); }
      else { resumeAllSnd(); }
    }//endif 

    
    
  }//controls  
  
  
  function afterUpdate()
  {
    
  resetBtn(); resetBtnCol();  
   sprBtn(900, "pause",320-24, 4, 18,18);
     if (btnPush == 900)
     { paused = !paused; }
   
    //paused menu 
      drawMenu();
 
   //debug stuff 
   if (bDebug)
   {
    countFps();
    ctx.font = "8px Arial";
    ctx.fillStyle = "#ffFFff";
    //ctx.strokeStyle = "#000000"; 
    var ax, ay;
    ax = 3; ay = 8;
    ctx.fillText("fps:"+curFps,ax, ay); ay+=8;
    ctx.fillText("gt:"+gt, ax, ay); ay+=8;
    ctx.fillText("keyTime:"+keyTime, ax, ay); ay+=8;
    ctx.fillText("vmx:"+vmx, ax, ay); ay+=8;
    ctx.fillText("vmy:"+vmy, ax, ay); ay+=8;
    ctx.fillText("mbutton:"+mbutton, ax, ay); ay+=8;
//    ctx.fillText("mvx:"+mvx, ax, ay); ay+=8;
//    ctx.fillText("mvy:"+mvy, ax, ay); ay+=8;
//    ctx.fillText("camx:"+camx, ax, ay); ay+=8;
//    ctx.fillText("camy:"+camy, ax, ay); ay+=8;
//    ctx.fillText("wmx:"+wmx, ax, ay); ay+=8;
//    ctx.fillText("wmy:"+wmy, ax, ay); ay+=8;
//    ctx.fillText("act:"+(vecAct.length), ax, ay); ay+=8;
//    ctx.fillText("bull:"+(vecBull.length), ax, ay); ay+=8;
   }//endif
    
    if (inFocus == false)
    {  
      
     // ctx.font = "16px Arial";
        //ctx.fillText("out of focus", 32, 64);  
      ctx.fillStyle = "#00000080";
      ctx.fillRect(0, 0, 320, 240);
      drawFont3Scale(40,40, 2,2, "OUT OF FOCUS");
    }

  }//afterupdate
  
  
  function getMag(dx, dy)  { return Math.sqrt(dx*dx + dy*dy); }
  
  var gameState = 1;
  var vecGrid = [];
  var mw = 0;
  var mh = 0;
  
  var hamx = 1;
  var hamy = 1;
  var hamdir = 0;
  var hamwait = 0;
  
  function initTileGrid(aw, ah)
  {
    var i; var num;
    aw |= 0; ah |= 0;
    num = aw * ah;
    mw = aw; mh = ah;
    vecGrid = [];
    for (i=0;i<num;i+=1)
    { vecGrid[i] = 0; }   
    console.log("initTileGrid",aw,ah,num, vecGrid);  
  }//initgrid 
  
  function setTile(ax, ay, t)
  {
    ax |= 0; ay |= 0;
    if (ax<0||ax>=mw||ay<0||ay>=mh) { return; }
    vecGrid[ (ax + (ay*mw))|0 ] = t;
  }//settile 
  
  function getTile(ax, ay)
  {
    ax |= 0; ay |= 0;
    if (ax<0||ax>=mw||ay<0||ay>=mh) { return -1; }
    return vecGrid[ (ax + (ay*mw))|0 ];
  }//gettile 
  
  function setTileRect(ax, ay, aw, ah, t)
  {
    ax |= 0; ay |= 0;
    
    var i, k;
    for (i=0;i<ah;i+=1)
    {
      for (k=0;k<aw;k+=1)
      {
        setTile(k+ax,i+ay, t); 
      }//nextk 
    }//nexti 
  }//settrect
  
  
  function drawBackDrop()
  {
    var i,k; var ax, ay;
    for (i=0;i< 8;i+=1)
    {
      ay = i * 32 + 16;
      for (k=0;k<10;k+=1)
      {
        ax = k * 32 + 16;
    
        drawSpr("bg1", ax, ay);
    
      }//nextk
    }//nexti
    
  }//drawback 
  
  function drawTileGrid()
  {    
    var i, k; var ax , ay;
    var t; 
    for (i=0;i<30;i+=1)
    {
      ay = i * 8 + 4;
      for (k=0;k<40;k+=1)
      {
        t = getTile(k, i);
        if (t<=0){ continue; }
        ax = k * 8 + 4;
        drawSpr("tile"+t, ax, ay);
      }
    }//nexti 
  }//drawtile 

  function drawAct()
  {
    drawSpr("ham"+hamdir, hamx*8+4, hamy*8+4);
    
  }//drawact 

  
  
  function update()
  { 
    
    if (firstRun == 1){ firstRun = 0; init(); gameState = 1; return; }
    controls();
       
    //UPDATE
      var i; var num;
      num = 1;
      if (paused) { num = 0; }
      if (bDebug && isKeyDown(key_u)) {num=16;}
      
      if (gameState == 1) 
      { 
        gameState = 0; 
        initTileGrid(40, 30);  
        //setTileRect(0,0,3,3, 1);
        setTileRect(0,0,40,30, 3);
        setTileRect(1,1,38,28, 0);
        
        setTileRect(6,6,28,18, 1);
        
        setTileRect(16,12, 8,6, 0);
        
        hamx = 18; hamy = 14;
        
        console.log("vecgrid", vecGrid);
      }//endif 
      
      for (i=0;i<num;i+=1)
      {  
         // if (mhold == 1){  playSnd("snd3", 1); }
        
          if (hamwait > 0) { hamwait -= 1; }
        
          if (hamwait <= 0)
          {
            var dx, dy;
            dx = 0; dy = 0;
            if (keyUp)    { dy = -1; hamdir = 3;}
            if (keyDown)  { dy = 1;  hamdir = 0;}
            if (keyLeft)  { dx = -1; hamdir = 1; }
            if (keyRight) { dx = 1;  hamdir = 2;}
            //if (dx !=0 && dy !=0 ){ dy = 0; }
            
            //push tiles 
                if ( (dx != 0 || dy != 0 ) && ( dx!=0 && dy !=0)==false)
                {
                  var k; var kx, ky; var t;
                  kx = hamx; ky = hamy;
                  for (k=0;k<32;k+=1)
                  { 
                    kx += dx; ky += dy;
                    if (getTile(kx,ky)==0) { break; }
                  }//nextk 
                  
                  if (k<32 && k > 0)
                  {
                    //cannot seem to play everytime with current method 
                   //playSnd("snd5", 1);
                   //console.log(gt, "push tile", k, dx, dy);
                   k+=1;
                   kx = hamx+dx*k; ky = hamy+dy*k;
                   for(k;k>0;k-=1)
                   {
                     t = getTile(kx-dx, ky-dy);
                     //console.log(gt, "tile ", kx, ky);
                     setTile(kx, ky, t);
                     kx -= dx; ky -= dy;
                   }//nextk        
                   
                  }//endif5
                }//endif3 
            
            //ham wall collision 
           if (getTile(hamx+dx, hamy)) { dx = 0;  }
           if (getTile(hamx, hamy+dy)) { dy = 0;  }
           if (getTile(hamx+dx, hamy+dy)) { dx = 0;  }
            
              hamx += dx; 
              hamy += dy;          
              hamwait = 5; 
          }//endif 
          
        /*
        var t;
        if (getRand()<0.50) { t = 0 } else { t = 1; }
          setTile(getRand()*20, getRand()*15,  t);
          */
      
          gt += 1;  
  
      }//nexti
      

        //RENDER     
          //ctx.fillStyle = "#000000";
          ctx.fillStyle = "#808080";
          ctx.fillRect(0, 0, 320, 240);
         
        /*         
          setDataLine(0,0, 320, 240,  255, 255,255);
          
          setDataLine(getRand()*320, getRand()*240,
          getRand()*320, getRand()*240,  getRand()*255,getRand()*255,getRand()*255);
          
          ctx.putImageData(imgData, 0, 0);
        */

           drawBackDrop();
           drawTileGrid();
           drawAct();
          
          
          
          
          
        //TEST
         // drawSpr("cat", 160, 120);
          
      
          
          /*
          var ta;
          var ax, ay; var ky;
          var k; var d; var da;
          var dx, dy; var t;
          ax = 0; ay = 0;
          ta = gt * 0.1;
          for (i=0;i<13;i+=1)
          {            
            ay = 16 + i * 16;
           for (k=0;k<19;k+=1)
           {
              ax = 16 + k * 16 ;
              ky = ay + Math.sin(ta) * 3;
              ta += 0.95;
              
              dx = vmx - ax ;
              dy = vmy - ky ;
              d = Math.sqrt(dx*dx+dy*dy);
              
              if (d > 0.0)
              {
                dx /= d;
                dy /= d;
                
                t = d / 64.0;
                t = 1.0 - t;
                if (t < 0.0) { t = 0.0; }
                if (t > 1.0) { t = 1.0; }
                
                //d = 32 - d;
                ax += dx * -32 * t;
                ky += dy * -32 * t;
                
                
              }            
              
              
              drawSpr("brick", ax, ky);
           }//nextk 
          }//nexti 
          */
          

  
      afterUpdate();
  
  }//update

  