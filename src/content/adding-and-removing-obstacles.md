---
title: 'Adding And Removing Obstacles'
---

It's up to us if we want one obstacle at a time or if we want to just recycle the obstacle. I _do_ know that I want it to be different so that the game doesn't get boring.

```scratch
when green flag clicked
set x to (241)
forever
	move (x speed) steps
	if <(x position) < [-239]> then
		set x to (241)
		switch costume to (pick random [1] to [3])
		set [x speed v] to (pick random (10) to (15))
	end
end
```

A lot of those numbers will need to be adjusted based on the size of the sprites and whatnot, but that's the general gist of a basic implementation.

**Next**: [Broadcasting a Message](broadcasting-a-message)
