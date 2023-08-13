---
title: "Combining Movements"
---

Alright, now we can begin to put together a whole bunch of the stuff we've been doing already.

````scratch
when green flag clicked
forever
	if <key [right arrow v] pressed?> then
		change [x velocity v] by [1]
	end
	if <key [left arrow v] pressed?> then
		change [x velocity v] by [-1]
	end
	if <key [space v] pressed?> then
		set [y velocity v] to [5]
	end
	if <color (#F00) is touching (#00F)?> then
		set [y velocity v] to [0]
	else
		change [y velocity v] by [-1]
	end
	if <(x velocity) > [0]> then
		point in direction (90)
	else
		point in direction (-90)
	end
	change y by (y velocity)
	change x by (x velocity)
	set [x velocity v] to ((x velocity) * [0.9])
end
````

All of a sudden we have a lot of logic in place to get some decent platformer logic.

Our character still drops beneath the floor a bit. It can also basically fly into space. Maybe you want this? But, what could we do?
