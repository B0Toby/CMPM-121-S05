Code Smells Identified:
Magic Numbers & Mysterious Names: Variables like c, a, b, and h were unclear, making the purpose of each line hard to follow.
Duplicated Code: Each button (increment, decrement, reset) repeated the same display-update logic.
Shotgun Surgery Risk: UI update logic (title, color, text) was scattered across multiple handlers — a small UI change would require edits in several places.

Refactoring Applied:
Rename Variable & Introduce Constant: Replaced short unclear names with descriptive constants (e.g., ID_INCREMENT, count), improving readability and reducing typos.
Extract Function (render()): Consolidated repeated UI updates into one function that’s called consistently after any change.
Introduce Parameter (apply(op)): Combined three similar button event handlers into one generalized handler to eliminate repetition and simplify logic.
