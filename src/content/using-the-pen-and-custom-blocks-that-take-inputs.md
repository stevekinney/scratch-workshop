---
title: 'Using The Pen And Custom Blocks That Take Inputs'
---

<iframe class="mx-auto" title="A Scratch Playground" src="https://scratch.mit.edu/projects/882260216/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>

Let's start by creating a reusable block that we can pass some inputs—just like a lot of the standard ones that we've seen so far.

```scratch
define draw polygon with (sides) sides and (length) length
repeat (sides)
	move (length) steps
	turn ccw ([360] / (sides)) degrees
end
```

I'm also going to quickly create a block for setting everything up.

```scratch
define setup
set [sides v] to [3]
set pen size to [4]
set pen color to [#F00]
pen up
erase all
```

And now I can create a loop to generate everything from a triangle to a decagon.

```scratch
when green flag clicked
setup::custom
repeat [7]
	go to x: [-50] y: [-150]
	pen down
	draw polygon with (sides) and [100] length::custom
	pen up
	change pen (color v) by [10]
	change [sides v] by [1]
end
```

And now we can programmatically draw some pretty cool shapes.

**Your turn**: Can you create a sketch that draws a series of squares?

The block should look something like this:

```scratch
define draw (number) squares
```

You can see a solution [here](https://scratch.mit.edu/projects/882262812) if you want.

<iframe class="mx-auto" title="Polygons" src="https://scratch.mit.edu/projects/882262812/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>

## Further Exploration

If you notice that your algorithm begins to break after a certain number of sides, take a moment to think about why. If you squint at this example, you'll likely get a hint.

<iframe title="More Polygons" src="https://scratch.mit.edu/projects/882496110/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
