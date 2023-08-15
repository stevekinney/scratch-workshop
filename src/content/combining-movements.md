---
title: 'Combining Movements'
---

Alright, now we can begin to put together a whole bunch of the stuff we've been doing already.

```scratch
when @greenFlag clicked
set [x velocity v] to [0]
set [y velocity v] to [0]
forever
    if <key [left arrow v] pressed?> then
        change [x velocity v] by (-1)
    end
    if <key [right arrow v] pressed?> then
        change [x velocity v] by (1)
    end
    if <color [#6693ff] is touching [#17b134]?> then
        set [y velocity v] to [0]
    else
        change [y velocity v] by (-1)
    end
    if <key [space v] pressed?> then
        set [y velocity v] to [5]
    end
    if <(x velocity) \< [0]> then
        point in direction (-90)
    else
        point in direction (90)
    end
    change y by (y velocity)
    change x by (x velocity)
    set [x velocity v] to ((x velocity) * (0.9))
end
```

All of a sudden we have a lot of logic in place to get some decent platformer logic.

Our character still drops beneath the floor a bit. It can also basically fly into space. Maybe you want this? But, what could we do?

If you play around with the game, you can see it still leavws a lot to be desired.

<iframe title="Imperfect Platformer" src="https://scratch.mit.edu/projects/881091476/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>

You can see it [here](https://scratch.mit.edu/projects/881091476).

Let's look at [a cool trick for fixing that issue where our character falls a little bit too far](using-a-custom-block-to-fix-our-landing).
