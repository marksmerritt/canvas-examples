addEventListener("turbolinks:load", () => {
  const canvas = document.getElementById("hello-world-canvas")
  const context = canvas.getContext("2d")
  const radian = Math.PI / 180
  // const lightCellColor = "#ddb180"
  // const darkCellColor = "#7c330c"

/*------- Polygon -------*/
const sides = 7
const radius = 100
const centerX = 200
const centerY = 400
const startAngle = 200
const angle = (2 * Math.PI) / sides

context.beginPath()
context.strokeStyle = "red"
context.lineWidth = 5
context.lineJoin = "round"

const beginX = centerX + radius * Math.cos(startAngle)
const beginY = centerY - radius * Math.sin(startAngle)

context.moveTo(beginX, beginY)

for(let i = 1; i <= sides; i++) {
  let currentAngle = startAngle + i * angle
  let currentPointX = centerX + radius * Math.cos(currentAngle)
  let currentPointY = centerY - radius * Math.sin(currentAngle)

  context.lineTo(currentPointX, currentPointY)
}

context.closePath()
context.stroke()

/*------- Shape Shadows -------*/
// context.beginPath()
// context.strokeStyle = "green"
// context.fillStyle = "green"
// context.shadowColor = "blue"
// context.shadowOffsetX = 5
// context.shadowOffsetY = 5
// context.shadowBlur = 5
// context.rect(150, 100, 150, 400)
// context.stroke()
// context.fill()

// context.beginPath()
// context.strokeStyle = "red"
// context.fillStyle = "red"
// context.shadowColor = "green"
// context.shadowOffsetX = 5
// context.shadowOffsetY = 5
// context.shadowBlur = 5
// context.arc(650, 300, 100, 0 * radian, 360 * radian, false)
// context.stroke()
// context.fill()


/*------- Half Circle -------*/
// context.beginPath()
// context.strokeStyle = "orange"
// context.fillStyle = "orange"
// context.moveTo(250, 250)
// context.lineTo(330, 310)
// context.arc(250, 250, 100, 37 * radian, 323 * radian, false)
// context.lineTo(250, 250)
// context.stroke()
// context.fill()

// context.beginPath()
// context.fillStyle = "black"
// context.arc(250, 200, 10, 0 * radian, 360 * radian, false)
// context.stroke()
// context.fill()

// context.beginPath()
// context.strokeStyle = "orange"
// context.fillStyle = "orange"
// context.arc(600, 250, 100, 143 * radian, 323 * radian, false)
// context.stroke()
// context.fill()

// context.beginPath()
// context.strokeStyle = "orange"
// context.fillStyle = "orange"
// context.arc(600, 250, 100, 37 * radian, 217 * radian, false)
// context.stroke()
// context.fill()

// context.beginPath()
// context.fillStyle = "black"
// context.arc(600, 200, 10, 0 * radian, 360 * radian, false)
// context.stroke()
// context.fill()


/*------- Half Circle -------*/
// context.beginPath()
// context.strokeStyle = "orange"
// context.lineWidth = 15
// context.fillStyle = "orange"
// context.arc(450, 300, 150, 135 * radian, 360 * radian, false)
// context.stroke()
// context.fill()



/*------- Chess Board -------*/
// context.strokeStyle = "black"
// context.strokeRect(250, 100, 400, 400)

// for(let x=1; x <= 8; x++) {
//   for(let y=1; y <= 8; y++) {
//     if ((x + y) % 2 == 0){
//       context.fillStyle = darkCellColor
//     } else {
//       context.fillStyle = lightCellColor
//     }

//     context.fillRect(200 + x * 50, 50 + y * 50, 50, 50)
//   }
// }


// for(let i=1; i <=8; i++) {
  // if (i % 2 == 0){
  //   context.fillStyle = darkCellColor
  // } else {
  //   context.fillStyle = lightCellColor
  // }

//   context.fillRect(200 + i * 50, 100, 50, 50)
// }

// for(let i=1; i <=8; i++) {
//   if (i % 2 == 0){
//     context.fillStyle = lightCellColor
//   } else {
//     context.fillStyle = darkCellColor
//   }

//   context.fillRect(200 + i * 50, 150, 50, 50)
// }

// for(let i=1; i <=8; i++) {
//   if (i % 2 == 0){
//     context.fillStyle = darkCellColor
//   } else {
//     context.fillStyle = lightCellColor
//   }

//   context.fillRect(200 + i * 50, 200, 50, 50)
// }

// context.fillStyle = lightCellColor
// context.fillRect(250, 100, 50, 50)

// context.fillStyle = darkCellColor
// context.fillRect(300, 100, 50, 50)

// context.fillStyle = lightCellColor
// context.fillRect(350, 100, 50, 50)

// context.fillStyle = darkCellColor
// context.fillRect(400, 100, 50, 50)





/*------- Rectangles -------*/

  // context.fillStyle = "blue"
  // context.fillRect(10, 40, 30, 70)

  // context.fillStyle = "yellow"
  // context.fillRect(50, 30, 60, 30)


  /*------- Horizontal Red line -------*/

  // context.beginPath()
  // context.strokeStyle = "red"
  // context.lineWidth = 10
  // context.moveTo(30, 70)
  // context.lineTo(130, 70)
  // context.stroke()


  /*------- Zig Zag -------*/

  // context.beginPath()
  // context.moveTo(30, 30)
  // context.lineTo(80, 80)
  // context.lineTo(130, 30)
  // context.lineTo(180, 80)
  // context.lineTo(230, 30)
  // context.stroke()


  /*------- Line Caps -------*/

  // context.beginPath()
  // context.lineCap = "butt"
  // context.strokeStyle = "red"
  // context.lineWidth = 10
  // context.moveTo(50, 50)
  // context.lineTo(200, 50)
  // context.stroke()

  // context.beginPath()
  // context.lineCap = "round"
  // context.strokeStyle = "blue"
  // context.lineWidth = 10
  // context.moveTo(50, 75)
  // context.lineTo(200, 75)
  // context.stroke()

  // context.beginPath()
  // context.lineCap = "square"
  // context.strokeStyle = "green"
  // context.lineWidth = 10
  // context.moveTo(50, 100)
  // context.lineTo(200, 100)
  // context.stroke()


  /*------- Line Joins -------*/

  // context.beginPath()
  // context.lineJoin = "miter"
  // context.lineWidth = 20
  // context.moveTo(30, 30)
  // context.lineTo(130, 30)
  // context.lineTo(130, 130)
  // context.lineTo(30,130)
  // context.lineTo(30, 230)
  // context.stroke()

  // context.beginPath()
  // context.strokeStyle = "red"
  // context.lineJoin = "bevel"
  // context.lineWidth = 20
  // context.moveTo(60, 60)
  // context.lineTo(160, 60)
  // context.lineTo(160, 160)
  // context.lineTo(60,160)
  // context.lineTo(60, 260)
  // context.stroke()

  // context.beginPath()
  // context.strokeStyle = "blue"
  // context.lineJoin = "round"
  // context.lineWidth = 20
  // context.moveTo(90, 90)
  // context.lineTo(190, 90)
  // context.lineTo(190, 190)
  // context.lineTo(90,190)
  // context.lineTo(90, 300)
  // context.stroke()

  /*------- Shadows -------*/

  // context.beginPath()
  // context.strokeStyle = "red"
  // context.lineWidth = 20
  // context.shadowColor = "blue"
  // context.shadowOffsetX = 10
  // context.shadowOffsetY = 10
  // context.shadowBlur = 10
  // context.moveTo(100,60)
  // context.lineTo(200,60)
  // context.stroke()

  // context.beginPath()
  // context.strokeStyle = "red"
  // context.lineWidth = 20
  // context.shadowColor = "green"
  // context.shadowOffsetX = -10
  // context.shadowOffsetY = 10
  // context.shadowBlur = 10
  // context.moveTo(350,60)
  // context.lineTo(450,60)
  // context.stroke()

  // context.beginPath()
  // context.strokeStyle = "red"
  // context.lineWidth = 20
  // context.shadowColor = "yellow"
  // context.shadowOffsetX = 10
  // context.shadowOffsetY = -10
  // context.shadowBlur = 10
  // context.moveTo(100,200)
  // context.lineTo(200,200)
  // context.stroke()

  // context.beginPath()
  // context.strokeStyle = "red"
  // context.lineWidth = 20
  // context.shadowColor = "brown"
  // context.shadowOffsetX = -10
  // context.shadowOffsetY = -10
  // context.shadowBlur = 10
  // context.moveTo(350,200)
  // context.lineTo(450,200)
  // context.stroke()


  /*------- Review -------*/

  // context.beginPath()
  // context.strokeStyle = "red"
  // context.lineWidth = 15
  // context.lineCap = "butt"
  // context.lineJoin = "miter"
  // context.shadowColor = "blue"
  // context.shadowOffsetX = 10
  // context.shadowOffsetY = 10
  // context.shadowBlur = 10
  // context.moveTo(60, 80)
  // context.lineTo(160,80)
  // context.lineTo(80, 180)
  // context.lineTo(180, 180)
  // context.stroke()

  // context.beginPath()
  // context.strokeStyle = "blue"
  // context.lineWidth = 15
  // context.lineCap = "round"
  // context.lineJoin = "round"
  // context.shadowColor = "yellow"
  // context.shadowOffsetX = 10
  // context.shadowOffsetY = 10
  // context.shadowBlur = 10
  // context.moveTo(340, 80)
  // context.lineTo(240,80)
  // context.lineTo(340, 180)
  // context.lineTo(240, 180)
  // context.stroke()

  // context.beginPath()
  // context.strokeStyle = "green"
  // context.lineWidth = 15
  // context.lineCap = "square"
  // context.lineJoin = "bevel"
  // context.shadowColor = "red"
  // context.shadowOffsetX = 10
  // context.shadowOffsetY = 10
  // context.shadowBlur = 10
  // context.moveTo(420, 80)
  // context.lineTo(520,80)
  // context.lineTo(440, 180)
  // context.lineTo(540, 180)
  // context.stroke()


  /*------- Curves -------*/

  // const radian = Math.PI / 180

  // context.beginPath()
  // context.strokeStyle = "blue"
  // context.lineWidth = 10
  // context.arc(100, 100, 50, 0 * radian, 180 * radian, false)
  // context.stroke()

  // context.beginPath()
  // context.strokeStyle = "red"
  // context.lineWidth = 10
  // context.arc(300, 200, 50, 45 * radian, 135 * radian, false)
  // context.stroke()

  // context.beginPath()
  // context.strokeStyle = "green"
  // context.lineWidth = 10
  // context.arc(300, 100, 50, 45 * radian, 135 * radian, true)
  // context.stroke()


  /*------- Quadratic Curves -------*/

  // context.beginPath()
  // context.strokeStyle = "red"
  // context.lineWidth = 10
  // context.moveTo(200, 250)
  // context.quadraticCurveTo(100, 100, 400, 250)
  // context.stroke()


  /*------- Bezier Curves -------*/

  // context.beginPath()
  // context.strokeStyle = "red"
  // context.lineWidth = 10
  // context.moveTo(200, 250)
  // context.bezierCurveTo(100, 10, 50, 150, 400, 250)
  // context.stroke()

  /*------- Rectangle -------*/
  // context.strokeStyle = "red"
  // context.lineWidth = 11
  // context.lineJoin = "round"
  // context.fillStyle = "blue"
  // context.rect(50, 200, 200, 200)
  // context.stroke()
  // context.fill()

  // context.fillRect(xCoordinate, yCoordinate, width, height)
  // context.fillStyle = "green"
  // context.fillRect(300, 200, 200, 200)

  // context.strokeRect(xCoordinate, yCoordinate, width, height)
  // context.lineWidth = 3
  // context.strokeStyle = "blue"
  // context.lineJoin = "square"
  // context.strokeRect(550, 200, 200, 200)

  //context.clearRect(xCoordinate, yCoordinate, width, height)
  // context.clearRect(100, 100, 200, 200)
  // context.clearRect(0, 0, 900, 600)

})

