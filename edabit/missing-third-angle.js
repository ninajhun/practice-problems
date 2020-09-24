function missingAngle(angle1, angle2) {
  const sum = angle1 + angle2

  const missingAng = 180 - sum

  if (missingAng === 90) {
    return 'right'
  } else if (missingAng < 90) {
    return 'acute'
  } else {
    return 'obtuse'
  }

}
