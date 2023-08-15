---
title: Broadcasting
---

<script>
  import Exercise from '../lib/exercise.svelte';
</script>

As we've seen, all of the code lives inside of a sprite. A sprite can tell if it's near another sprite, but it can't tell it waht to do. (It _can_ trigger a clone of another sprite, but it can't control how that clone behaves.)

We _can_ do **broadcast a message**. Any other sprites that care about that message can listen for messages and then run their own code.

<iframe title="Saying Without Broadcasting" src="https://scratch.mit.edu/projects/882503201/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>

Consider the above example. It would be very polite if the monkey responded, right?

The current code looks like this:

```scratch
when this sprite clicked
say [Hello!] for [2] seconds
```

We can see this happening, but the monkey has no idea it happened.

We can add a broadcast block to our sprite.

```scratch
when this sprite clicked
say [Hello!] for [2] seconds
broadcast (Cat Said Hello v) // The message name doesn't matter.
```

On the **Monkey**, we'll add this new block.

```scratch
when I receive [Cat Said Hello v]
say [Hi hi hi!] for [2] seconds
```

<iframe title="Saying with Broadcasting" src="https://scratch.mit.edu/projects/882498489/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>

<Exercise>
  Can you make the cat respond whenever the monkey is clicked and says hello?
</Exercise>

Next, let's look at [Variable Lists](variable-lists).
