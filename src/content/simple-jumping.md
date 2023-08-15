---
title: 'Simple Jumping'
---

Getting jumping to feel natural can take some work. Let's look at some of simplest mechanics and see if we can improve it.

```scratch
when green flag clicked
forever
	if <key [space v] pressed?> then
		change y by [50]
		wait [0.5] secs
		change y by [-50]
	end
end
```

As you can see, this leaves a bit to be desired. Our sprite jumps up and back down quickly.

So, instead, we can try to break it apart a bit.

```scratch
when green flag clicked
forever
	if <key [space v] pressed?> then
		repeat [10]
			change y by [20]
		end
		wait [0.5] secs
		repeat [10]
			change y by [-20]
		end
	end
end
```

We still have some issues here.

- You can continue to jump just by holding down the key.
- It still doesn't feel natural—like, at all.

Let's look at [jumping with velocity and ground detection](jumping-with-velocity-and-ground-detection).
