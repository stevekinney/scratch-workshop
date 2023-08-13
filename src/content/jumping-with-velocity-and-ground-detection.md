---
title: 'Jumping With Velocity And Ground Detection'
---

When we first looked at [jumping with velocity](jumping-with-velocity-but-without-ground-detection), we had to use some math to keep track of where started from in order to land in the same position. In a platform game, we don't necessarily care where we started, we just care that we're on solid ground.

```scratch
when green flag clicked
set [y speed v] to [0]
forever
	change y by (y speed)
end
```

We can create a game loop that starts us out on the ground and forever applies our current speed. As the player plays the game, we'll adjust this variable.

```scratch
when green flag clicked
set (y speed) to [0]
forever
	if <touching color (#000)?> then
		set [y speed v] to [0]
		if <key [space v] pressed?> then
			set [y speed v] to (10)
		end
	end
	change y by (y speed)
	change [y speed v] by (-0.5)
end
```

We now have a pretty slick jumping motion.
