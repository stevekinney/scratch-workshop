---
title: 'Combining Movement And The Game Loop'
---

Let's start with some basic set up and make sure that our little player goes where they should whenever the game begins.

```scratch
when green flag clicked
go to x: [0] y: [0]
point in direction [90]
```

It's good practice to set your game back to a normal state whenever you run it. We'll be doing this throughout this course.

## More Ways to Control Movement

There are a few different way to control movement. Some of it will depend on what kind of effect you're going for.

- In some games, you have to hold down a particular key in order to make the player move. (**Example**: _Super Mario Bros_.)
- In other games, you press a given direction once and the player keeps moving in the direction until you switch directions. (**Examples**: _Pac-Man_, _Snake_.)

Even with those two different ways, we can take a number of approaches. I won't bore you with all of them just now. But, I will try to sprinkle them in across some of the different examples that we build today.

Which one is the best? That's up to you. In the last example, we did something like this.

```scratch
when [left arrow v] key pressed
point in direction [-90]
move [10] steps

when [right arrow v] key pressed
point in direction [90]
move [10] steps

when [up arrow v] key pressed
point in direction [0]
move [10] steps

when [down arrow v] key pressed
point in direction [180]
move [10] steps
```

This will work, but it has two major issues:

- It's repetitve.
- And those key presses will still work when the game is stopped.
- It's repetitive.

**A quick, but important, note**: In these examples, I'm using 10 as the number of steps that player will move. If this feels too fast for you then you can lower the number and the character will move a bit more slowly. The opposite is—of course—true, if you _increase_ the number, then the player will move faster. Dial in whatever number feels right for you.

## Using a Game Loop

Alternatively, if we can do something like this:

```scratch
when green flag clicked
forever
	if <key [right arrow v] pressed?> then
		point in direction [90]
		move [10] steps
	end
	if <key [left arrow v] pressed?> then
		point in direction [-90]
		move [10] steps
	end
end
```

Now, the game characters won't move when the keys are pressed if the game is stopped. This is _way_ better.

The cool part is that if we wanted to change the behavior to keep going in a given direction until we change directions, we can fix that pretty quickly as well.

```scratch
when green flag clicked
forever
	if <key [right arrow v] pressed?> then
		point in direction [90]
	end
	if <key [left arrow v] pressed?> then
		point in direction [-90]
	end
	move [10] steps
end
```

> \[!todo\] Up and Down Movement
> Our little player can only go right and left. Can you get him pointed up and down as well? You can start by duplicating what we currently have and tweaking a bit.

**Hint**: There are clues for what direction you should point the player in above, but you can also just use the rotation adjustment in Scratch as well.

Next, we'll take a look at [the solution](adding-vertical-movement).
