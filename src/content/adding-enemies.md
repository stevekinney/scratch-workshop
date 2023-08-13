---
title: 'Adding Enemies'
---

What fun is eating tacos if you didn't avoid some enemies on your quest to get your tacos?We can create an additional sprite and have it chase our hero around.

```scratch
when green flag clicked
forever
	point towards [Player v]
	move [5] steps
end
```

I went for 5 steps because I wanted our enemy to be a _little_ bit slower than our hero. But you can adjust this to whatever feels right for you. But, what do I do when the enemy gets to the player?

```scratch
when green flag clicked
forever
	point towards [Player v]
	move [5] steps
	if <touching [Player v]> then
		stop [all v]
	end
end
```

And now, the game will end whenever our enemy catches up the our player. You can see this iteration of the game here.

<iframe class="mx-auto" title="A Scratch Playground" src="https://scratch.mit.edu/projects/878930247/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>

We can also choose to [make the game go faster as the score gets higher](making-the-game-progressively-faster).
