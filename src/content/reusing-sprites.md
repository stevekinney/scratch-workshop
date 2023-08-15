---
title: 'Reusing Sprites'
---

<script>
  import Exercise from '../lib/exercise.svelte';
</script>

Instead of creating a ton of apples, we can just reuse the same one as needed.

```scratch
when green flag clicked
forever
	set [Velocity v] to (0)
	go to x: (pick random (-200) to (200)) y: (180)
	repeat until <touching color (#000)?>
		change y by (Velocity)
		change [Velocity v] by [-1]
	end
end
```

Now, whenever the apple hits the ground, we'll move it back to the starting position. This gives the illusion that it's raining apples!

Can you add a character to catch the apples.

<Exercise>
  Can you add a character?
</Exercise>

We can check it out [here](adding-a-character-to-the-falling-game).
