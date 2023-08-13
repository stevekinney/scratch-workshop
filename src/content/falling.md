---
title: 'Falling'
---

Let's add a simple version of gravity. In this case, we want something to continue falling until it hits the ground.

```scratch
when green flag clicked
forever
	repeat until <touching color (#000)>
		change y by [-5]
	end
end
```

This will cause our sprite to fall at a pretty consistent rate. We can also look at using velocity to make this a feel a bit more natural. Let's take a look at how to [add the concept of velocity](falling-with-velocity) to our falling apples.

> \[!NOTE\] Using Colors for Collisions
> Eventually, we'll move away from using colors for collision detection and we'll use sprites instead, but this is quick and easy for now and it will get the job done.

Our falling works, but does feel a bit weird. This is because in the real world, things tend to speed up as their falling. We call this **velocity** and we can [update our falling mechanic to use velocity](falling-with-velocity).
