/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: william s
 * Created on: oct 2023
 * This program finds the distance between the sonar and an object
*/

//variable
let distanceToObject:number = 0

//setup
basic.showIcon(IconNames.Happy)

//find distance from sonar
input.onButtonPressed(Button.A, function () {
 basic.clearScreen()
 distanceToObject = sonar.ping(
  DigitalPin.P1,
  DigitalPin.P2,
  PingUnit.Centimeters
 )
basic.showNumber(distanceToObject)
basic.showIcon(IconNames.Happy)
})
