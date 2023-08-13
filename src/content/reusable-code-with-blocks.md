---
title: 'Reusable Code With Blocks'
---

We know how to iterate on a number and keep score. But, just in case we forgot, it looks something like this:

```scratch
if <touching [Pico v]> then
	change [Score v] by [1]
end
```

This is problematic because the apple will keep falling and it will keep bumping up the score. We might consider moving the apple back to it's starting position.

```scratch
if <touching [Pico v]> then
	set [Velocity v] to [0]
	go to x: (pick random [-200] to [200]) y: [180]
	change [Score v] by [1]
end
```

But, this makes me feel bad. We have the exact some code _twice_. This means, if I want to change something about the starting position, then I'll need to change in multiple places. I'm very lazy. So, I'm going to use something called a block to create a reusable piece of code.

```scratch
define move to top
set [Velocity v] to [0]
go to x: (pick random [-200] to [200]) y: [180]
```

And now, I have a new custom piece of code that I can reuse.

I can update my code to look like this:

```scratch
when green flag clicked
set [Score v] to [0]
forever
	move to top::custom
	repeat until <touching color (#000)?>
		if <touching [Pico v]?> then
			move to top::custom
			change [Score v] by (1)
		end
		change y by (Velocity)
		change [Velocity v] by (-1)
	end
end
```

## Refactoring

In fact, I think I can make this even cleaner now.

```scratch
when green flag clicked
move to top::custom
set [Score v] to [0]
forever
	if <touching [Pico v]?> then
		move to top::custom
		change [Score v] by (1)
	end
	if <touching color (#000)?> then
		move to top::custom
	end
	change y by (Velocity)
	change [Velocity v] by (-1)
end
```

So, this code is _basically_ doing the following:

- Keep dropping.
- If you're touching Pico, bump the score and move the apple to the top.
- If you're touching the ground, respawn.
- If neither is true, fall a little bit faster.

Alright, it's your turn to try this out [by making something to avoid](adding-enemies-to-raining-apples).
