class promise{
  constructor(fn){
    this.status='pending';
    this.resolveList=[];

    this.rejectList=[];
  }
  then(scb,fcb){
    if(scb){
      this.resolveList.push(scb)
    }

    if(fcb){
      this.rejectList.push(fcb)
    }
    return this;
  }

  catch(cb){
    if(cb){
      this.rejectList.push(cb);
    }
    return this;
  }
  resolve(data){
    if(this.status!=='pending')return;
    this.status='fulfilled';
    setTimeout(()=>{
      this.resolveList.forEach(s=>{
        data=s(data);
      })
    })
  }

  reject(data) {
    if(this.status!=='pending')return;
    this.status='rejected';
    setTimeout(()=>{
      this.rejectList.forEach(s=>{
        data=s(data);
      })
    })
  }

  static resolve(data){
    if(data instanceof Promise){
      return data;
    }else {
      return new Promise((resolve,reject)=>{
        resolve(data)
      })
    }
  }

  static reject(err){
    if(data instanceof Promise){
      return data;
    }else {
      return new Promise((resolve,reject)=>{
        reject(err)
      })
    }
  }

  static all(promises){
    return new Promise((resolve,reject)=>{
      let promiseCount=0;
      let promisesLength=promises.length;
      let result=[];
      for(let i=0;i<promisesLength;i++){
        Promise.resolve(promises[i]).then(res=>{
          result[i]=res;
          promiseCount++;
          if(promiseCount===promisesLength){
            return resolve(result);
          }
        },err=>{
          return reject(err);
        })
      }
  })
  }  
  static race(promises){
    return new Promise((resolve,reject)=>{
      for(let i=0;i<promisesLength;i++){
        Promise.resolve(promises[i]).then(res=>{
          return resolve(res)
        },err=>{
          return reject(err);
        })
      }
    })
  }
}