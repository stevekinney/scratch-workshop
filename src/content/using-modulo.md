---
title: 'Using Modulo'
---

Let's say that every three points, we want to add another enemy. We can figure out how many enemies we should have using division and then rounding.

```scratch
(round ((Score) / [3]))
```

It's not perfect, because it will round to the nearest whole number, which means that we'll get a first new enemy at 5, 8, etc.

We can also use a modulo to figure out where we are as well.

```scratch
((Score) mod [3])
```

This will be 0 every three points. We could do something like this.

```scratch
when green flag clicked
forever
	if <touching [Player v]?> then
		go to [random position v]
		change [Score v] by [1]
		if <((Score) mod [3]) = [0]> then
			create clone of (Enemy v)
		end
	end
end
```

And now we'll have fewer clones that spring up. Here is a version of our game.

<iframe class="mx-auto" title="A Scratch Playground" src="https://scratch.mit.edu/projects/882161779/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>

## Further Exploration

There are lots of little tweaks you could do to make this game even better. For example, you can prevent the taco from getting too close to the edges. I'll let y'all explore on your own as I move on to our next game.

**Example**: Here is an example where I customized the way that the enemies follow our [hero](https://scratch.mit.edu/projects/882583391).

<iframe title="Taco Chase with Better Following" src="https://scratch.mit.edu/projects/882583391/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>

Let's talk about [Broadcasting](broadcasting).
