
export class TimerComponent {

  constructor(){
    console.log('Hello Timer components!')
    this.time = new Date();
    this.displayTime()
  }

  displayTime(){
    let timeElement = document.getElementById('time')
    if(timeElement){
      // some css with JS for time txt
      timeElement.innerHTML = this.getTime(this.time)
      timeElement.style.fontSize = '10rem';
      timeElement.style.margin = '0rem';
      timeElement.style.textShadow = '0px 0px 50px rgba(0, 0, 0, 0.21)';
      // run interval
      setInterval(()=>{
        // asigne a new Date()
        this.time = new Date();
        //console.log(`${this.time.getHours()}:${this.time.getMinutes()}:${this.time.getSeconds()}`)
        // replace innerHTML of time element
        timeElement.innerHTML = this.getTime(this.time)
      },1000)
    }
  }

  getTime(time){
    return    `
    <time datetime="${(time.getFullYear() < 10)?'0'+time.getFullYear():time.getFullYear()}-${(time.getMonth() < 10)?'0'+time.getMonth():time.getMonth()}-${(time.getDate() < 10)?'0'+time.getDate():time.getDate()} ${(time.getHours() < 10)?'0'+time.getHours():time.getHours()}:${(time.getMinutes() < 10)?'0'+time.getMinutes():time.getMinutes()}:${(time.getSeconds() < 10)?'0'+time.getSeconds():time.getSeconds()}">
      ${(time.getHours() < 10)?'0'+time.getHours():time.getHours()}:${(time.getMinutes() < 10)?'0'+time.getMinutes():time.getMinutes()}:${(time.getSeconds() < 10)?'0'+time.getSeconds():time.getSeconds()}
    </time >
    `;
  }
}
