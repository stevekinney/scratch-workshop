---
title: 'Randomly Moving The Prize'
---

Running after a particular taco that doesn't move isn't particularly fun. Let's say that we want to move the taco whenever our player finds it.

We're start by selecting our taco and then adding a game loop:

```scratch
when green flag clicked
forever

end
```

We might try something like this.

```scratch
when green flag clicked
forever
	if <touching [Player v]?> then
		go to [random position v]
	end
end
```

Great. We got a taco. But, there is something missing. I'm not feeling as celebratory as I would want to. It's almost like if we don't have points, then it doesn't matter, right? Let's look into [how to keep score](keeping-score).
