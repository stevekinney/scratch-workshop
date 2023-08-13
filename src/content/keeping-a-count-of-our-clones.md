---
title: 'Keeping A Count Of Our Clones'
---

We're going to use a variable to keep track of the number of clones that _should_ be present and make sure that we create new ones if needed.

```scratch
when green flag clicked
set [Clones v] to [0]
forever
	if <(Clones) < (Score)> then
		create clone of (myself v)
		change [Clones v] by [1]
	end
end
```

<iframe class="mx-auto" title="A Scratch Playground" src="https://scratch.mit.edu/projects/880750775/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>

Counters are a great way to keep track of the state of your game. Well, I'm sure there is more we can do here, but let's move on to our next game: **Dinosaur Jump**.
