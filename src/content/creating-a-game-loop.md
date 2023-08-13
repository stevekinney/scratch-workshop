---
title: 'Creating A Game Loop'
---

A lot of games have something called a game loop. This is just a way to run some code over and over to check to see what's happening or to update stuff constantly.

Let's go program our _other_ sprite for a moment.

```scratch
when green flag clicked
forever
	next costume
	wait (1) seconds
end
```

Now, you'll see that our monkey is cycling through it's costumes once a second. It's not much, but it helps show what we're talking about. This code will run until the game stops, which right now will only happen when we hit the **red stop sign**.

## Sensing and Saying

We can use this loop to check for different conditions. In this case, we're constantly checking to see if Arnold is touching the other sprite. If so, then we'll run a little block of code. If not, we'll just keep checking!

```scratch
when green flag clicked
go to x: [-172] y: [-117]
forever
	if <touching (Monkey v)?> then
		say [Hello] for [2] seconds
	end
end
```

We could add some additional functionality that puts Arnold back where he is supposed to start as well.

```scratch
when green flag clicked
point in direction [90]
go to x: [-172] y: [-117]
forever
	if <touching (Monkey v)?> then
		say [Hello] for [2] seconds
		glide [1] secs to x: [-172] y: [-117]
	end
end
```

You could _also_ choose to break apart reseting the game and the game loop. It doesn't _really_ matter, but part of coding is keeping things organized so that it's easy to find the piece that you need to change later.

```scratch
when green flag clicked
point in direction [90]
go to x: [-172] y: [-117]

when green flag clicked
forever
	if <touching (Monkey v)?> then
		say [Hello] for [2] seconds
		glide [1] secs to x: [-172] y: [-117]
	end
end
```

You can see the completed version of what we have so far [here](https://scratch.mit.edu/projects/878669620).

<iframe class="mx-auto" title="A Scratch Playground" src="https://scratch.mit.edu/projects/878669620/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>

But, with that, I think we should probably go make a game, right? Let's make a super simple game called **Taco Chase**. For our game, we're going to need to [create a sprite](creating-a-sprite).
