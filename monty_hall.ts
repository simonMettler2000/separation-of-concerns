export function play(times: number) {
  if (times < 0) {
    throw new Error("cannot play a negative number of times");
  }
  let wonSticking = 0;
  let wonChanging = 0;
  for (let i = 0; i < times; i++) {
    // first, prepare the game
    const doorsWithPrice: Map<number, boolean> = new Map([
      [1, false],
      [2, false],
      [3, false],
    ]);
    const winningDoor = Math.floor(Math.random() * 3) + 1;
    doorsWithPrice.set(winningDoor, true);

    // second, let the player make his guess
    const playerGuess = Math.floor(Math.random() * 3) + 1;

    // third, pick a loosing door to be eliminated from the choices
    const loosingDoor = [...doorsWithPrice.keys()].find(
      (d) => d != winningDoor && d != playerGuess,
    );

    // fourth, count wins by 1) sticking to the initial choice, and 2) changing the initial choice
    const winsSticking = doorsWithPrice.get(playerGuess);
    const otherDoor: number = [...doorsWithPrice.keys()].filter(
      (d) => d != loosingDoor && d != playerGuess,
    )[0];
    const winsChanging = doorsWithPrice.get(otherDoor);
    if (winsSticking) {
      wonSticking++;
    } else if (winsChanging) {
      wonChanging++;
    }
  }

  // finally, print the statistics
  console.log(`played ${times} times`);
  console.log(`won ${wonSticking} times by sticking to the initial choice`);
  console.log(`won ${wonChanging} times by changing the initial choice`);
  const f = Intl.NumberFormat("en-US", { maximumFractionDigits: 2 });
  console.log(
    `sticking wins ${f.format((wonSticking / times) * 100)}% of games`,
  );
  console.log(
    `changing wins ${f.format((wonChanging / times) * 100)}% of games`,
  );
}
