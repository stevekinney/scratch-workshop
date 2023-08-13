---
title: 'Making The Game Progressively Faster'
---

There are a few ways that we could do this. The easiest of which would be to just use the score as the basis for the speed of the game. As you score more points, the game will speed up.

One easy way to do this is to just add whatever number we were using for movement to the current score.

```scratch
((Score) + [10])
```

You'll probably want to do that for both the player and the enemy. Here is what our player will look like now.

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
	move ((Score) + [10]) steps
end
```

Your enemy will look like this:

```scratch
when green flag clicked
forever
	point towards [Player v]
	move ((Score) + [5]) steps
	if <touching [Player v]> then
		stop [all v]
	end
end
```

And now, you'll see the game gets progressively harder as we eat tacos.

<iframe class="mx-auto" title="A Scratch Playground" src="https://scratch.mit.edu/projects/882159439/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>

A different mechanic that we can try out is [to use clones to create additional enemies](using-clones-to-create-additional-enemies).
