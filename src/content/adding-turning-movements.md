---
title: 'Adding Turning Movements'
---

rYou might not choose to do this, but I want to show you that's it's another option for you to think creatively about what you're trying to accomplish. Here is what we're going to attempt:

- Our player is always moving.
- Like a race car, we can turn the wheel right or left.

We might consider something like this:

```scratch
when green flag clicked
forever
	if <key [right arrow v] pressed?> then
		turn cw [1] degrees
	end
	if <key [left arrow v] pressed?> then
		turn ccw [1] degrees
	end
	move [1] steps
end
```

Go ahead and take it for a spin. Like I said, you could see this mechanic being super interesting for a racing game, for example.

> \[!todo\] Mini Exercise
> Can you add a conditional that only moves the sprite forward when the space bar is pressed?

Now that we have a moving character, we probably want to give him something to move towards, right? Let's [randomly place a prize for our player to find](randomly-moving-the-prize).
