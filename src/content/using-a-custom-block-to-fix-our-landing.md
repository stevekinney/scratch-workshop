---
title: "Using A Custom Block To Fix Our Landing"
---

Credit: This mechanic was inspired by [this amazing series by griffpatch](https://www.youtube.com/playlist?list=PLy4zsTUHwGJIATydhFeZa5pspLZR7yE__).

The important part is that we check the box next to **Run without screen refresh**.

````scratch
define Fix Landing
repeat until <not <touching color (#F00)?>
	change y by [1]
end
set (velocity y) to [0]
````

## Using Steps for Movement

````scratch
define Move in Steps [steps]
repeat (steps)
	set [last value v] to (y position)
	change y by ((velocity y) / (steps))
	if <touching color (#F00)?> then
		set y to (last value)
		set [velocity y v] to (0)
	end
end
````

Now, you can check without a screen refresh.

````scratch
Move in Steps ([abs v] of (velocity y))::custom
````

## Adding Horizontal Movement

````scratch
define Move in Steps [steps]
repeat (steps)
	set [last value v] to (x position)
	change x by ((velocity x) / (steps))
	if <touching color (#F00)?> then
		set y to (last value)
		set [velocity y v] to (0)
	end
	set [last value v] to (y position)
	change y by ((velocity y) / (steps))
	if <touching color (#F00)?> then
		set y to (last value)
		set [velocity y v] to (0)
	end
end
````

````scratch
Move in Steps (([abs v] of (velocity x)) + ([abs v] of (velocity y)))::custom
````

## Adding in Our Jumping Mechanic

````scratch
define Move in Steps [steps]
change [falling v] by [1] // Set falling to a positive number.
repeat (steps)
	set [last value v] to (x position)
	change x by ((velocity x) / (steps))
	if <touching color (#F00)?> then
		set y to (last value)
		set [velocity y v] to [0]
	end
	set [last value v] to (y position)
	change y by ((velocity y) / (steps))
	if <touching color (#F00)?> then
		set y to (last value)
		set [falling v] to [0] // Set it to zero when we touch the ground.
		set [velocity y v] to [0]
	end
end
````

We now know if we're mid-jump and we can check when the player tries to jump again.

````scratch
if <key [up arrow v] pressed?> then
	if <(falling) < [3]> then
		set [speed y v] to (12)
	end
end
````

## Solving for Sticking to the Ceiling

````scratch
define Move in Steps [steps]
change [falling v] by [1]
repeat (steps)
	set [last value v] to (x position)
	change x by ((velocity x) / (steps))
	if <touching color (#F00)?> then
		set y to (last value)
		set [velocity y v] to [0]
	end
	set [last value v] to (y position)
	change y by ((velocity y) / (steps))
	if <touching color (#F00)?> then
		set y to (last value)
		if <(speed y) < [0]> then
			set [falling v] to [0]
		end
		set [velocity y v] to [0]
	end
end
````
