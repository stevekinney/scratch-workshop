---
title: Variable Lists
---

So far, we've stored just one variable. But, we can also store lists of variabled.

<iframe title="Variable Lists" src="https://scratch.mit.edu/projects/882504773/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>

The code looks like this:

```scratch
when this sprite clicked
say (item (i) of [Catch Phrases v]) for (2) seconds
change [i v] by (1)
```

The problem here is that he gives as soon as `i` is greater than the number of items in the list. We _could_ write some complicated logic or we could use our good friend the [modulo operator](./using-modulo).

We might try something like this:

```scratch
when this sprite clicked
say (item ((i) mod (4)) of [Catch Phrases v]) for (0.5) seconds
change [i v] by (1)
```

The problem is that occasionally, this will be zero and this still won't work. We can adjust things a little bit.

```scratch
when this sprite clicked
say (item (((i) mod (4)) + (1)) of [Catch Phrases v]) for (0.5) seconds
change [i v] by (1)

when @greenFlag clicked
set [i v] to [0]
```

Now, we'll start at 0 and always add 1 to the result of the module. And now everything works as expected.

## One Further Improvement

What if we add more things to the list? That number **4** is hard coded. In programming, we call this a magic number. What is the meaning of 4? Well, it's the length of the list, right?

We just use that instead.

```scratch
when this sprite clicked
say (item (((i) mod (length of [Catch Phrases v]::data)) + (1)) of [Catch Phrases v]) for (0.5) seconds
change [i v] by (1)

when @greenFlag clicked
set [i v] to [0]
```

Here is what we have now.

<iframe src="https://scratch.mit.edu/projects/882507932/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>

## Your Turn

Can you create a conversation between the Cat and the Monkey?

- Each can have it's own list.
- They can broadcast back and forth.
- `i` could be a shared variable or you could try it unique to each sprite.
