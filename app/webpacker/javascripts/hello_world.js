addEventListener("turbolinks:load", () => {
  const canvas = document.getElementById("hello-world-canvas")
  const context = canvas.getContext("2d")

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

  context.beginPath()
  context.strokeStyle = "red"
  context.lineWidth = 10
  context.moveTo(200, 250)
  context.bezierCurveTo(100, 10, 50, 150, 400, 250)
  context.stroke()
  console.log("Hello world")
})

