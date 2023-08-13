---
title: "Using Colors To Sense Direction"
---

We've using the **Sensing** blocks to detect if we should stop falling, but this doesn't work super well with a platformer because we don't want our player to stop falling because their head is touching the platform. (Or, maybe you do. I don't know.)

In Scratch, we don't have a ton of options, but there is a little trick that we can use: the ability to see if a certain color on the sprite is touching another color.

If we're super careful about our color choices, we can get the mechanic that we're looking for.

````scratch
if <color (#F00) is touching (#00F)?> then
	set [y velocity v] to [0]
end
````

If we're clever, we can also use colors to detect if we touching a wall as well. But, I'll leave that as an exercise for you.
