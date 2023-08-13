---
title: 'Adding A Character To The Falling Game (Solution)'
---

Here is a decent start that we can build on.

```scratch
when green flag clicked
set rotation style [left-right v]
forever
	if <key [right arrow v] pressed?> then
		point in direction [90]
		move [10] steps
		next costume
	end
	if <key [left arrow v] pressed?> then
		point in direction [-90]
		move [10] steps
		next costume
	end
end
```

## Adding the Gravity

Pico's not going to use the gravity just yet, but we can add the same falling logic that use used for the apples to Pico.

```scratch
when green flag clicked
set rotation style [left-right v]
forever
	if <key [right arrow v] pressed?> then
		point in direction [90]
		move [10] steps
		next costume
	end
	if <key [left arrow v] pressed?> then
		point in direction [-90]
		move [10] steps
		next costume
	end
	repeat until <touching color (#000)?>
		change y by (Velocity)
		change [Velocity v] by [-1]
	end
end
```

## Fixing a Bug: Pico Can Fall Too Far

With our current—and super simple—velocity code, it's possible for Pico to drop a little too far. This is probably fine and you don't need to worry about it. But, if you _really_ want to know one way to adjust for this, then we could basically check to see if the next time we move Pico is about to be too far.

There are a number of ways that you can do this, we're going to start with the simplest one. We roughly know where we placed Pico. Let's say that our floor starts at -159. I don't want Pico to fall any further than -159. I can add this code to my repeating block.

```scratch
repeat until <touching color (#000)?>
	if <((y position) + (Velocity)) > (-159)> then
		change y by (Velocity)
		change [Velocity v] by [-1]
	else
		set y to (-159)
	end
end
```

Basically, we're telling the sprite to do the normal falling logic until we're about to fall _too far_ and then just cut it short and move us to the correct right position. It's a little messy, but it works. Here is the full code.

```scratch
when green flag clicked
set rotation style [left-right v]
forever
	if <key [right arrow v] pressed?> then
		point in direction [90]
		move [10] steps
		next costume
	end
	if <key [left arrow v] pressed?> then
		point in direction [-90]
		move [10] steps
		next costume
	end
	repeat until <touching color (#000)?>
		if <((y position) + (Velocity)) > (-159)> then
			change y by (Velocity)
			change [Velocity v] by [-1]
		else
			set y to (-159)
		end
	end
end
```

Again, this still isn't our best solution since it involves hard coding in exactly where the ground is. I'll show you how [to _really_ get this right later](using-a-custom-block-to-fix-our-landing).

With that, let's look at [keeping score](reusable-code-with-blocks).
