/**
 * calculateTheNewScore
 * 
 * Calculates the new user's score based on asteroids which have been destroyed
 * by lasers, i.e. they have reached a health of 0, and adds each asteroids
 * points to the current user's total score.
 * 
 * listOfAsteroids
 *    An array of asteroid objects which contain the following important
 *    properties.
 *    {
 *       health: <integer> - The asteroids health a value of 0 or more
 *       points: <integer> - The value the asteroid is worth for the user's score when destroyed
 *    }
 * currentScore
 *   The user's current score.
 * 
 * Return: The new user's score based on the asteroids that have been destroyed and
 *         how much each asteroid was worth.
 */
function calculateTheNewScore(listOfAsteroids, currentScore) {
  const listOfDestroyedAsteroids = listOfAsteroids.filter((item) => {
    return item.health === 0;
  });

  const asteroidPoints = listOfDestroyedAsteroids.map((asteroid) => {
    return asteroid.points;
  });

  const newScore = asteroidPoints.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, currentScore);

  return newScore;
}