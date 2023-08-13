---
title: 'Jumping With Velocity But Without Ground Detection'
---

We have the ability to jump, but it still feels a bit off. This is because we're not taking this pesky thing called gravity into consideration. Let's see if we can adjust that a bit.

```scratch
when green flag clicked
forever
	if <key [space v] pressed> then
		set [velocity v] to [10]
		repeat [21]
			change y by (velocity)
			change (velocity) by [-1]
		end
	end
end
```

What's happening here?

- We start by setting a local variable for how much the sprite should jump.
- We repeat this just enough to go all the way up and then all the way back down.
  - We change the `y` position of the sprite by the velocity.
  - We then slow it down a bit.
  - At some point, it will become negative and sprite will settle back to where it began.

The alternative approach is to [try to sense whether or not you're on the ground end the jumping motion](jumping-with-velocity-and-ground-detection).

## Using Multiplication

We can also try to do this by using multiplication.

```scratch
when green flag clicked
forever
	if <key [space v] pressed> then
		set [y speed v] to (10)
		repeat (((y speed) * [2]) + [1])
			change y by (y speed)
			change [y speed v] by [-1]
		end
	end
end
```

## Preventing the Rocket Ship Effect

The problem with this logic is that our hero will fly off the screen. We check to see if Arnold is _not_ jumping before we let him jump.

```scratch
when green flag clicked
forever
	if <key [space v] pressed> then
		if <(y speed) < [0]> then
			set [y speed v] to (10)
		end
		repeat (((y speed) * [2]) + [1])
			change y by (y speed)
			change [y speed v] by [-1]
		end
	end
end
```

Next, let's look at [adding and removing obstacles in our game](adding-and-removing-obstacles).
