---
title: 'Create A Custom Block'
---

Custom blocks allow us to reuse code by making our own blocks that we can drag in.

![Creating a Block](/images/create-a-block.png)

Give your block the name "chase Player" or something along those lines.

```scratch
define chase Player
go to x: (235) y: (180)
forever
	point towards [Player v]
	move [5] steps
end
```

And now, we can just use that block.

```scratch
when green flag clicked
chase Player::custom

when I start as a clone
chase Player::custom
```

Changing the block will effect both code paths now. No more repeating ourselves.

## Adding Some Randomness

We can add a little bit of randomness to our custom block now to make the beetles a little bit more autonomous.

```scratch
define chase Player
go to x: (235) y: (180)
forever
	point towards [Player v]
	turn cw (pick random [-30] to [30]) degrees
	move (pick random [1] to [5]) steps
end
```

You might need to play with this mechanic a bit, but you get the idea. I think this game escalates a little bit too quickly though. Let's try to limit the their creation a bit.

**Next**: [Using Modulo](using-modulo)
