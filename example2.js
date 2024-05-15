function isEligible(age, hasConsent) {
  if (age > 18 && hasConsent === true) {
    return true;
  } else {
    return false;
  }
}

const age = 18;
function isEligible(age, hasConsent) {
  return (age > age && hasConsent === true);
}
