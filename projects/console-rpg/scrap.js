while (currentEnemy.health >= 0 || user.health >= 0) {
    enemy.health -= damage;
    user.health -= damage;
}
if (currentEnemy.health <= 0) {
    console.log("You won the battle!! what a surpise I totally thought you were gonna die.");
} else if (user.health <= 0) {
    console.log("You have lost! Your family has been disgraced.")
}
