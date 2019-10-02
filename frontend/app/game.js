/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// This function runs when the Game Screen is ON
function gamePlay() {
  // Draw background
  if (imgBackgroundInGame) {
    background(Koji.config.colors.backgroundColor) // To overlay the Starting Screen
    background(imgBackgroundInGame)
  } else {
    background(Koji.config.colors.backgroundColor)
  }

  // Floating Text effects
  for (let i = 0; i < floatingTexts.length; i += 1) {
    floatingTexts[i].update()
    floatingTexts[i].render()
  }

  // Particle effects
  for (let i = 0; i < particles.length; i += 1) {
    if (particles[i]) {
      particles[i].render()
      particles[i].update()
    }
  }

  // Draw Timer! (Comment this blob of code if you don't want timer)
  if (Koji.config.strings.enableTimer && gameTimerEnabled) {
    gameTimer -= 1 / frameRate()
    drawTimer()
  }

  // InGame UI
  clouds.forEach(cloud => {
    cloud.show()
    cloud.update()

    if (cloud.wentOutOfFrame()) {
      cloud.removable = true
    }
  })

  coinsAndObstacles.forEach(entity => {
    entity.show()
    entity.update()
    if (entity.settings.type === 'obstacle') entity.rotate(undefined)

    if (entity.wentOutOfFrame()) {
      entity.removable = true
    }
  })

  fallingPerson.show()
  fallingPerson.body.position.x += Smooth(0, 10, 0.75) * fallingPerson.moveDir

  // move by keys on desktop
  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW || key === 'a') {
      if (fallingPerson.wentOutOfFrame()) {
        fallingPerson.body.position.x = width
      }
    }

    if (keyCode === RIGHT_ARROW || key === 'd') {
      if (fallingPerson.wentOutOfFrame()) {
        fallingPerson.body.position.x = 0
      }
    }
  }

  if (gameStart) {
    fallingPerson.body.position.y += 0
    // cameraMovementSpeed += 0.0007

    // start spawing coins, obstacles and clouds
    spawnTimer += 1 / frameRate()
    if (spawnTimer >= 0.4) {
      clouds.push(
        new MovingEntity(
          {
            x: random(0, width),
            y: height + height * 0.1,
          },
          {
            width: random(objSize * 6, objSize * 8),
            height: random(objSize * 4, objSize * 6),
          },
          { image: imgCloud, shape: 'rectangle', type: 'cloud' }
        )
      )

      const entityType = random(entityTypes)
      const entitySize =
        entityType.typeName === 'obstacle' ? objSize * 4 : objSize * 3
      coinsAndObstacles.push(
        new MovingEntity(
          {
            x: random(0, width),
            y: height + height * 0.1,
          },
          {
            width: entitySize,
            height: entitySize,
          },
          {
            image: entityType.image,
            shape: 'rectangle',
            type: entityType.typeName,
            rotate: true,
          }
        )
      )

      spawnTimer = 0
    }
  }

  if (!gameStart) {
    fallingPerson.body.position.y += 25
  }

  // Score draw
  const scoreX = width - objSize / 2
  const scoreY = objSize / 3
  textSize(objSize * 2)
  fill(Koji.config.colors.scoreColor)
  textAlign(RIGHT, TOP)
  text(score, scoreX, scoreY)

  // Lives draw
  const lifeSize = objSize * 1.5
  for (let i = 0; i < lives; i += 1) {
    image(
      imgLife,
      lifeSize / 2 + lifeSize * i * 1.2,
      lifeSize / 2,
      lifeSize,
      lifeSize
    )
  }

  cleanup()
}
