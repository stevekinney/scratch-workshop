---
title: 'Moving Up And Down With Velocity Solution'
---

The solution is pretty simple. You can just add a second variable and then duplicate the logic.

```scratch
when green flag clicked
forever
	if <key (left arrow v) pressed?> then
		change [x velocity v] by (-1)
	end
	if <key (right arrow v) pressed?> then
		change [x velocity v] by (1)
	end
	if <key (up arrow v) pressed?> then
		change [y velocity v] by (1)
	end
	if <key (down arrow v) pressed?> then
		change [y velocity v] by (-1)
	end
	set [x velocity v] to ((x velocity) * (0.9))
	set [y velocity v] to ((y velocity) * (0.9))
	change x by (x velocity)
	change y by (y velocity)
end
```
