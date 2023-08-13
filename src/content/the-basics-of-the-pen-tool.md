---
title: 'The Basics Of The Pen Tool'
---

In addition to working with sprites, Scratch also has an extension called [Pen](https://en.scratch-wiki.info/wiki/Pen). This super cool because it allows you have complete control of how you draw graphics. You can choose to use it to create games or you can use to make art with code.

```scratch
when green flag clicked
erase all
go to x: [-40] y: [0]
set pen size to [5]
set pen color to [#F00]
pen down
go to x: [40] y: [0]
```

We can also adjust the pen color.

```scratch
when green flag clicked
erase all
set pen size to [10]
set pen color to [#F00]
go to x: [-40] y: [0]
pen down
repeat [100]
	move [1] steps
	change pen [color v] by [1]
end
pen up
```

This code will end up with result below.

<iframe class="mx-auto" title="A Scratch Playground" src="https://scratch.mit.edu/projects/882188012/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>

## A Bigger Rainbow

```scratch
when green flag clicked
pen up
set pen size to [10 v]
set pen color to [#F00]
go to x: [-240] y: [-180]
repeat until <(y position) < [-179]>
	pen down
	repeat until <(x position) > [240]>
		move (pen size) steps
		change pen (color v) by [1]
	end
	pen up
	set x to [-240]
	change y by ([0] - (pen size))
end
```

<iframe class="mx-auto" title="A Scratch Playground" src="https://scratch.mit.edu/projects/882193436/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
