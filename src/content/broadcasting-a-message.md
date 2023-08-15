---
title: 'Broadcasting A Message'
---

<script>
  import Exercise from '../lib/exercise.svelte';
</script>

Let's say we want to have a Game Over screen. Ideally, this would show when the game ends, right? But, how does the screen know?

Well, sprites can broadcast messages. But, first let's start by hiding our game over screen when the game begins.

```scratch
when green flag clicked
hide
```

And then in our player, we'll add the following to the game loop.

```scratch
if <touching (Enemy v)> then
	broadcast (Game Over v)
end
```

Back in our Game Over sprite, we'll listen for that message.

```scratch
when I receive [Game Over v]
show
stop [all v]
```

And that will do it! Broadcasting is super useful when you need to communicate between sprites.

<iframe class="mx-auto" title="A Scratch Playground" src="https://scratch.mit.edu/projects/880791778/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>

<Exercise>
  Can you show and hide the enemy and player when the game starts and ends?
</Exercise>
