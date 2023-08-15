---
title: 'Keeping Score'
---

<script>
  import Exercise from '../lib/exercise.svelte';
</script>

![Variables Pane](/images/variables-pane.png)

In order to keep score, we need a way to store the current value. This is where we'll create a variable.

You have two options:

- Rename `my variable` to `score`.
- Make a new one.

I'll do the first now (and the second later). Click on that fancy **Make a Variable** button.

![Creating a Variable](/images/create-a-variable.png)

You can scope a variable down to just one sprite or share it across all of them. There are different reasons to do both, but for the score, we want all of the sprites to have access to it.

If you click that little checkbox, it will show up in your game.

![Viewing Your Variables](/images/see-a-variable.png)

Okay, now whenever the player is touching the taco, we want to change the score by one.

```scratch
when green flag clicked
forever
	if <touching [Player v]?> then
		go to [random position v]
		change [Score v] by [1]
	end
end
```

<Exercise>
 Okay, that's cool. But we have a problem. We want to reset the score back to 0 when the game starts. Can you figure out how to make that work?
</Exercise>

You can check out [the solution here](resetting-the-score).
