---
title: 'Basic Movements Part Ii'
---

A relatively simple solution is doing something like this:

```scratch
when green flag clicked
go to x: (-172) y: (-117)

when [right arrow v]  key pressed
move (10) steps

when [left arrow v]  key pressed
move (-10) steps
```

The biggest issue here is that we end up doing something that looks a bit like a moonwalk.

![Moonwalking Sprite](/images/moonwalking.gif)

## Facing the Right Direction

So, we want to make Arnold face in the correct direction. We can do that by adjusting his direction based on which way he is moving.

```scratch
when green flag clicked
go to x: (-172) y: (-117)

when [right arrow v]  key pressed
point in direction (90)
move (10) steps

when [left arrow v]  key pressed
point in direction (-90)
move (-10) steps
```

![Rotations](/images/rotations.png)

But, this doesn't work exactly like we might expect. I'll repeat that: it _works_, but just not like we might _expect_.

The move block will move Arnold relative to whatever direction he is facing. So, we have him face backwards and then walk backwards. Two wrongs don't make a right, but they do make a backwards apparently.

This is why we want to _constantly_ test stuff out. Let's adjust our code to deal with our changes.

```scratch
when [left arrow v]  key pressed
point in direction (-90)
move (10) steps
```

## Rotating Correctly

Alright. This is way better. Maybe. But, like I just so happen to have my rotation style set to flip him back and forth. What happens if we do this?

![Sprite Direction](/images/direction.png)

Umm. That's not what we want.

![An Upside Down Arnold](/images/upside-down-arnold.png)

We're going to need to do something about this. I don't want to have to set everything up by hand. This is why I learned how to code. Luckily, we can program Arnold to set the rotation style to what we want before we rotate him.

## Putting Some Pep Into His Step

Remember when we saw his two different—but very similar costumes? We can use those to our advantage and have him rotate between them as he walks.

```scratch
when [right arrow v] key pressed
set rotation style [left-right v]
point in direction (90)
next costume
move (10) steps

when [left arrow v] key pressed
set rotation style [left-right v]
point in direction (-90)
next costume
move (10) steps
```

This code is duplicated and really we just want to make sure everything is set up right at the beginning, so we could do something like this:

```scratch
when gf clicked
set rotation style [left-right v]

when [right arrow v] key pressed
point in direction (90)
next costume
move (10) steps

when [left arrow v] key pressed
point in direction (-90)
next costume
move (10) steps
```

Okay, let's talk a little bit about [game loops](creating-a-game-loop).
