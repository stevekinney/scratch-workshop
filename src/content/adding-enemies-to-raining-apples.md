---
title: 'Adding Enemies To Raining Apples'
---

## Not Everything That Comes From the Sky is Good

Okay, let's do a little bit of copy-and-paste action and get something super close to what we have for the apples.

```scratch
define move to top
set [Velocity v] to [0]
go to x: (pick random [-200] to [200]) y: [180]

when green flag clicked
forever
	if <touching [Pico v]> then
		stop [all v]
	end
	if <touching color (#000)?> then
		move to top::custom
	end
	change y by (Velocity)
	change [Velocity v] by [-1]
end
```

Scratch is smart enough to bring the variables over, but you'll also need to copy over your custom block as well.

The biggest change was that I took out the concept of updating the score and I just have the game end if a lightning bolt hits our hero.

## Adding a Layer of Difficulty with Clones

Okay, what if we made the game harder as your score increased. We've already tried out the mechanic of making things faster. So, what about just starting to increase the number of lightning bolts?

Let's start by making our falling mechanism reusable.

```scratch
define fall
set [Velocity v] to [0]
move to top::custom
forever
	if <touching [Pico v]> then
		stop [all v]
	end
	if <touching color (#000)?> then
		move to top::custom
	end
	change y by (Velocity)
	change [Velocity v] by [-1]
end

when green flag clicked
fall::custom

when I start as a clone
fall::custom
```

For the apples, we just recycled the same apple. I don't want to program a bunch of lightning bolts. I just want to make copies of the code that I already wrote.

## What Goes Up Must Come Down

We can go down, but we can't go up yet. But, what goes up must come down, right? Let's talk about [jumping](creating-a-jumping-movement).
