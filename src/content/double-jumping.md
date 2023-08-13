---
title: "Double Jumping"
---

There are some games where the character can only jump once. But, sometimes you can also do a *double jump*.

````scratch
when green flag clicked
	forever
		if <touching color [#000000]?> then
			set [jumps v] to [0]
		end
````

````scratch
when green flag clicked
forever
	if <<key [up arrow v] pressed?> and <touching color [#000000]&gt;&gt; then
		change y by (5)
		change [jumps v] by (1)
		jump::custom
	else
	if <<key [up arrow v] pressed?> and <(jumps) < [2]>> then
		change [jumps v] by (1)
		jump::custom
	end
end
````
