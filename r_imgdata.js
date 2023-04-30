


 var imgData = ctx.createImageData(320, 240);
 //ctx.putImageData(imgData, 0, 0);
  //    imgData.data[t+0] = rc;
  //    imgData.data[t+1] = gc;
  //    imgData.data[t+2] = bc;
  //    imgData.data[t+3] = 255;
 
  function setDataPix(ax, ay, rc, gc, bc)
  {
    ax |= 0; ay |= 0;
    var t = (ax + (ay*320)) * 4;
    //console.log(" t ", t);
    imgData.data[t+0] = rc;
    imgData.data[t+1] = gc;
    imgData.data[t+2] = bc;
    imgData.data[t+3] = 255;
  }//setpixel  
  
  function clearDataPix( rc, gc, bc)
  {
      var i; var num;
      num=320*240*4;
      for (i=0;i<num;i+=4)
      {
        imgData.data[i+0] = rc;
        imgData.data[i+1] = gc;
        imgData.data[i+2] = bc;
        imgData.data[i+3] = 255;  
      }//nexti 
  }//cleardata 
  
  
  function setDataLine(x0, y0, x1, y1,  rc, gc, bc) 
 {
   var dx, dy, err, e2; var i;
   x0 |= 0; y0 |= 0; x1 |= 0; y1 |= 0;
   
   dx = Math.abs(x1-x0), sx = x0<x1 ? 1 : -1;
   dy = Math.abs(y1-y0), sy = y0<y1 ? 1 : -1; 
   err = (dx>dy ? dx : -dy)/2;
 
    for(i=0;i<400;i+=1){
      setDataPix(x0, y0, rc, gc, bc);
      if (x0==x1 && y0==y1) break;
      e2 = err;
      if (e2 >-dx) { err -= dy; x0 += sx; }
      if (e2 < dy) { err += dx; y0 += sy; }
    }//nexti
}//setline
  
  
  