---
title: 'Using A Custom Block To Fix Our Landing'
---

Credit: This mechanic was inspired by [this amazing series by griffpatch](https://www.youtube.com/playlist?list=PLy4zsTUHwGJIATydhFeZa5pspLZR7yE__).

## Falling Without Falling Through the Ground

Okay, so we're going to start with our falling mechanic again. We're going to create a variable called `velocity y`. And we'll put a game loop in having our character call until it reaches the color of the ground.

```scratch
when @greenFlag clicked
set [velocity y v] to [0]
forever
    change [velocity y v] by (-1)
    change y by (velocity y)
    if <touching color [#63a1ff]?> then
        set [velocity y v] to [0]
    end
end
```

So, we still have that issue where we fall through the floor, but this time, we can't just hard-code in a **y** value for where the floor is because there could be more than one floor.

We need a new approach. Make a new block called **fix landing** and make sure that you check **Run without screen refresh**.

![Run without screen refresh](/images/fix-landing.png)

```scratch
when @greenFlag clicked
set [velocity y v] to [0]
forever
    change [velocity y v] by (-1)
    change y by (velocity y)
    if <touching color [#63a1ff]?> then
        fix landing::custom // This will run without a refresh.
    end
end

define fix landing
repeat until <not <touching color [#63a1ff]?>>
    change y by (1) // Inch back up until we're not touching the ground anymore.
end
set [velocity y v] to [0]
```

## Putting the Jumping Motion Back In

Putting the jumping motion back in is prertty straight forward at this point.

```scratch
when @greenFlag clicked
set [velocity y v] to [0]
forever
    if <key [space v] pressed?> then
        set [velocity y v] to [10]
    end
    change [velocity y v] by (-1)
    change y by (velocity y)
    if <touching color [#63a1ff]?> then
        fix landing::custom
    end
end

define fix landing
repeat until <not <touching color [#63a1ff]?>>
    change y by (1)
end
set [velocity y v] to [0]
```

## Improving Our Block

This works, but it's not perfect in a lot of ways. We keep inching our hero up. Here is the plan:

- Instead of letting Scratch move the character 10 steps, we're going to write a block that moves the character slowly.
- It will keep track of the last position that it moved the character to.
- If on the next movement, we've gone too far,
- then move it back to the last position known to be good,
- set **velocity y** to 0,
- and be done with it.

Let's see how that looks in code.

```scratch
when @greenFlag clicked
set [velocity y v] to [0]
go to x\: (-195) y\: (-94)
forever
    change [velocity y v] by (-1)
    if <key [space v] pressed?> then
        set [velocity y v] to [10]
    end
    move steps ([abs v\] of (velocity y\)::operators\)::custom // We want to divide by a positive number, even if we're going down.
end

define move steps (steps\)
repeat (steps::custom)
    set [last y v] to (y position) // Keep track of where we just was.
    change y by ((velocity y) / (steps::custom)) // Break it apart unto the total number of steps.
    if <touching color [#63a1ff]?> then
        set y to (last y) // Go back to the last known good place.
        set [velocity y v] to [0] // End the jumping.
    end
end
```

## Moving Left and Right

Okay, this is similar to what we did earlier, but it's going to be a bit more problematic this time.

```scratch
when @greenFlag clicked
set [velocity y v] to [0]
set [velocity x v] to [0] // Return the x movement to 0.
go to x\: (-195) y\: (-94)
forever
    set [velocity x v] to ((velocity x) * (0.8)) // Slow it down every tick.
    change [velocity y v] by (-1)
    if <key [space v] pressed?> then
        set [velocity y v] to [10]
    end
    if <key [right arrow v] pressed?> then
        change [velocity x v] by (1.5) // Start propelling them right.
    end
    if <key [left arrow v] pressed?> then
        change [velocity x v] by (-1.5) // Start propelling them left.
    end
    change x by (velocity x) // Move them.
    move steps ([abs v\] of (velocity y\)::operators\)::custom
end

define move steps (steps\)
repeat (steps::custom)
    set [last y v] to (y position)
    change y by ((velocity y) / (steps::custom))
    if <touching color [#63a1ff]?> then
        set y to (last y)
        set [velocity y v] to [0]
    end
end
```

Our hero is going to end up going through the walls. We need something similar here.

```scratch
when @greenFlag clicked
set [velocity y v] to [0]
set [velocity x v] to [0]
go to x\: (-195) y\: (-94)
forever
    set [velocity x v] to ((velocity x) * (0.8))
    change [velocity y v] by (-1)
    if <key [space v] pressed?> then
        set [velocity y v] to [10]
    end
    if <key [right arrow v] pressed?> then
        change [velocity x v] by (1.5)
    end
    if <key [left arrow v] pressed?> then
        change [velocity x v] by (-1.5)
    end
    move steps (([abs v\] of (velocity y\)::operators\) + ([abs v\] of (velocity x\) ::operators\)\)::custom // We need the total number of steps both horizontal and vertical.
end

define move steps (steps\)
repeat (steps::custom)
    set [last x v] to (x position) // Make sure you do all of the horizontal movement first.
    change x by ((velocity x) / (steps::custom))
    if <touching color [#63a1ff]?> then
        set x to (last x)
        set [velocity x v] to [0]
    end
    set [last y v] to (y position)
    change y by ((velocity y) / (steps::custom))
    if <touching color [#63a1ff]?> then
        set y to (last y)
        set [velocity y v] to [0]
    end
end
```

Okay, now things are a lot more smooth.

## Removing the Ability to Jump While Jumping

This isn't Kirby.

```scratch
when @greenFlag clicked
set [velocity y v] to [0]
set [velocity x v] to [0]
go to x\: (-195) y\: (-94)
forever
    set [velocity x v] to ((velocity x) * (0.8))
    change [velocity y v] by (-1)
    if <key [space v] pressed?> then
        if <(jumping) = [0]> then // Make sure we're not already jumping.
            set [velocity y v] to [15]
            set [jumping v] to [1] // Say that we're currently jumping.
        end
    end
    if <key [right arrow v] pressed?> then
        change [velocity x v] by (1.5)
    end
    if <key [left arrow v] pressed?> then
        change [velocity x v] by (-1.5)
    end
    move steps (([abs v\] of (velocity y\)::operators\) + ([abs v\] of (velocity x\)::operators\)\)::custom
end

define move steps (steps\)
repeat (steps::custom)
    set [last x v] to (x position)
    change x by ((velocity x) / (steps::custom))
    if <touching color [#63a1ff]?> then
        set x to (last x)
        set [velocity x v] to [0]
    end
    set [last y v] to (y position)
    change y by ((velocity y) / (steps::custom))
    if <touching color [#63a1ff]?> then
        set y to (last y)
        set [jumping v] to [0] // Say that we've landing on solid ground.
        set [velocity y v] to [0]
    end
end
```

Here is what it looks like now.

<iframe src="https://scratch.mit.edu/projects/882751672/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen title="A Better Platformer"></iframe>
