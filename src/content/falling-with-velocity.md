---
title: 'Falling With Velocity'
---

Things tend to fall faster the more they fall. This is called _velocity_. If we want to make our sprite speed up as it falls, we can use a variable to store the value.

```scratch
when green flag clicked
forever
	set [Velocity v] to (0)
	repeat until <touching color (#000)?>
		change y by (Velocity)
		change [Velocity v] by [-1]
	end
end
```

But, this game isn't very good with just one apple, right? Let's take a look at how to [make it rain apples](reusing-sprites).
