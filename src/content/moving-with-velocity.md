---
title: 'Moving With Velocity'
---

We can use velocity to make our movements feel smooth.

## Moving Left and Right

```scratch
when green flag clicked
forever
	if <key (right arrow v) pressed?> then
		change [x velocity v] by (1)
	end
	if <key (left arrow v) pressed?> then
		change [x velocity v] by (-1)
	end
	set [x velocity v] to ((x velocity) * (0.9))
	change x by (x velocity)
end
```

## Exercise: Moving Up and Down

Can you add the ability to move up and down? You can see the solution [here](moving-up-and-down-with-velocity-solution).

You might also want to look at [how to point yourself in the right direction using velocity](finding-direction-with-velocity).
