---
title: 'Finding Direction With Velocity'
---

This is pretty easy if we're _just_ running left and right.

```scratch
if <(x velocity) > [0]> then
	point in direction (90)
else
	point in direction (-90)
end
```

Okay, this involves a little bit of trigonometry, but let's just pretend like we know what that is.

```scratch
if <(y velocity) = [0]> then
	if <(x velocity) < [0]> then
		point in direction (90)
	else
		point in direction (-90)
	end
else
	if <(y velocity) < [0]> then
		point in direction ((180) + ([atan v] of ((x velocity) / (y velocity))))
	else
		point in direction ([atan v] of ((x velocity) / (y velocity)))
	end
end
```

If this stresses you out, you can copy the code from [here](https://scratch.mit.edu/projects/881082967).

<iframe class="mx-auto" title="A Scratch Playground" src="https://scratch.mit.edu/projects/881082967/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
