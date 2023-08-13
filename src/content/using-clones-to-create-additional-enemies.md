---
title: 'Using Clones To Create Additional Enemies'
---

We can create a clone of the Beetle when we score a point by adding this logic to our Taco.

```scratch
when green flag clicked
forever
	if <touching [Player v]?> then
		go to [random position v]
		change [Score v] by [1]
		create clone of (Beetle v)
	end
end
```

This might not give us exactly what we want, but it's a pretty cool mechanic even if it's not what we wanted.

![Stuck Beatles](/images/stuck-beetles.gif)

Our player can also run right over the clones. But, this would be easily fixed if we moved the collision detection logic to the Player instead of the Beetle.

```scratch
when green flag clicked
forever
	if <key [right arrow v] pressed?> then
		point in direction [90]
	end
	if <key [left arrow v] pressed?> then
		point in direction [-90]
	end
	if <key [up arrow v] pressed?> then
		point in direction [0]
	end
	if <key [down arrow v] pressed?> then
		point in direction [180]
	end
	if <touching (Beetle v)> then
		stop [all v]
	end
	move [10] steps
end
```

And then remove that code from our Beetle.

```scratch
when green flag clicked
forever
	point towards [Player v]
	move [5] steps
end
```

## Making the Clones Move

Now that our Beetle clones can end the game, we need to make them move.

```scratch
when green flag clicked
forever
	point towards [Player v]
	move [5] steps
end

when I start as a clone
forever
	point towards [Player v]
	move [5] steps
end
```

This feels repetitive, but we can deal with that in a bit. We have a bigger problem right now. Our clones will just follow the original Beetle around.

![Fast Following Beetles](/images/fast-following-beetles.gif)

We can solve this by moving our clone as soon as its created. In fact, we probably should do this when the game starts to.

```scratch
when green flag clicked
go to x: (235) y: (180)
forever
	point towards [Player v]
	move [5] steps
end

when I start as a clone
go to x: (235) y: (180)
forever
	point towards [Player v]
	move [5] steps
end
```

That was kind of annoying doing it twice, right? They also converge eventually. I could _fix_ that but I am getting _real tired_ of doing things twice.

Instead, I'm going to [Create a Custom Block](create-a-custom-block).
