---
title: 'Basic Movements Part I'
---

<script>
  import Exercise from '../lib/exercise.svelte';
</script>

## Taking Small Steps in the Right Direction

Let's start with something super simple. We'll have Arnold move ten steps to the right whenever we press the right arrow.

```scratch
when [right arrow v] key pressed
move (10) steps
```

If you look closely, you'll see the that the green flag flashes for a second. That's totally okay. We'll deal with that in a bit.

## Resetting the Game

Sure, we can move stuff around by hand, but it makes total sense that we might want to put everything back to where it's suppose to whenever that game starts. That's what that green flag is for. It's a special event that signifies that we're starting our game or story.

Sprites and backdrops can listen for this event and we can tell them what to do when it happens.

```scratch
when green flag clicked
go to x: (-172) y: (-117)
```

<Exercise>
  Can you make Arnold go in the opposite direction when the left arrow is pressed?
</Exercise>

Take a few minutes and we'll talk about the [solution](basic-movements-part-ii).
