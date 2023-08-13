---
title: 'Adding Vertical Movement'
---

We can start by duplicating what had previously and tweaking it like this:

```scratch
if <key [up arrow v] pressed?> then
		point in direction [0]
	end
if <key [down arrow v] pressed?> then
	point in direction [180]
end
```

Next, we'll add it to our game loop.

```scratch
when green flag clicked
forever
	if <key [right arrow v] pressed?> then
		point in direction [90]
	end
	if <key [left arrow v] pressed?> then
		point in direction [-90]
	end
	if <key [up arrow v] pressed?> then
		point in direction [0]
	end
	if <key [down arrow v] pressed?> then
		point in direction [180]
	end
	move [10] steps
end
```

And now, our little friend can move in all four directions.

**Optional Extension**: For fun, let's look at [a slightly different approach to movement](adding-turning-movements).
