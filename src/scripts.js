export function medIssue(issue){
  const url = `https://api.betterdoctor.com/2016-03-01/doctors?name=true&first_name=true&last_name=true&query=true&specialty_uid=true&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&sort=best-match-desc&skip=0&limit=10&user_key=${process.env.exports.apiKey}`
}
