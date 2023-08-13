---
title: 'Resetting The Score'
---

This should be pretty easy, right?

```scratch
when green flag clicked
set [Score v] to [0]
forever
	if <touching [Player v]?> then
		go to [random position v]
		change [Score v] by [1]
	end
end
```

Okay, let's explore some ways in which we can make this a bit more interesting:

- [Adding Enemies](adding-enemies)
- [Using Clones to Create Additional Enemies](using-clones-to-create-additional-enemies)
- [Making the game go faster as the score gets higher](making-the-game-progressively-faster).
