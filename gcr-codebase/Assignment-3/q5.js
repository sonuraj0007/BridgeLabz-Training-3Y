// Check different smart-home security states.
function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
  let secure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
  let unsafe = !isAlarmOn || !isDoorLocked || !isWindowClosed || !isOwnerInside;
  console.log(`Security: ${secure && !unsafe ? "Secure" : "Unsafe"}`);
}
checkSecurity(true, true, true, true);
checkSecurity(false, true, true, true);
checkSecurity(true, true, false, true);
