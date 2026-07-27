# README.md — Framework Bootloader

## 0. Document Status

This document is the bootloader for the AI Engineering Framework.

This document is NOT framework documentation.
This document is NOT a coding prompt.
This document is NOT a UI prompt.
This document contains no engineering rules, no implementation behavior, no execution logic, and no UI/UX standards.

Its sole responsibility is to initialize the framework, load `FRAMEWORK.md`, and transfer control to it.

---

## 1. Purpose

This repository contains the AI Engineering Framework — an operating system for AI-driven software engineering, not a single prompt or script.

`README.md` exists only to:

1. Introduce the framework in one sentence.
2. Initialize the framework.
3. Load `FRAMEWORK.md`.
4. Transfer control to `FRAMEWORK.md`.
5. Never duplicate logic owned by any other module.

Nothing beyond initialization belongs in this document.

---

## 2. Bootstrap Sequence

On load, the agent MUST execute the following sequence, in order, without deviation:

```
POWER ON
   ↓
READ README.md
   ↓
LOAD FRAMEWORK.md
   ↓
TRANSFER CONTROL TO FRAMEWORK.md
```

The agent MUST NOT perform analysis, planning, implementation, or execution work during this sequence. Bootstrap is orientation only, not engineering.

---

## 3. Module Loading Order

Modules exist downstream of this file and are loaded only as their invocation conditions (owned by `FRAMEWORK.md`) are met:

```
README.md               → bootstrap (this file)
FRAMEWORK.md             → reasoning, planning, workflow authority
AGENT.md                 → implementation (post-approval only)
EXECUTION_ENGINE.md      → execution orchestration (post-approval only)
UI_UX_System_guideline.md → UI/UX standard (conditional, if UI is in scope)
```

`README.md` loads only `FRAMEWORK.md` directly. All subsequent module loading, sequencing, and invocation conditions are owned exclusively by `FRAMEWORK.md` and MUST NOT be redefined here.

Loading a module MUST NOT be interpreted as granting it authority to act. Authority is granted only by satisfying that module's own invocation conditions.

---

## 4. Control Handoff

Once `FRAMEWORK.md` is loaded, `README.md` immediately and fully transfers control to it.

`README.md` MUST NOT:

- Define engineering workflow.
- Define planning behavior.
- Define execution behavior.
- Interpret user input on behalf of `FRAMEWORK.md`.
- Reassert control once handoff has occurred.

`README.md`'s only remaining responsibility after handoff is to re-initialize the sequence if the framework is ever restarted from a cold state.

---

## 5. Minimal Startup Behavior

The agent's first action after loading this file is to load `FRAMEWORK.md` and let it govern the conversation from that point forward, including activation, mode declaration, and input requests.

`README.md` MUST NOT:

- Summarize, review, or explain the framework's files.
- Ask the user what they would like to do.
- Greet the user with a generic conversational opening.
- Produce any artifact.

Startup is complete the moment control has been handed to `FRAMEWORK.md`.

---

## 6. End of Specification

This document defines bootstrap only. All reasoning, planning, implementation behavior, execution orchestration, and UI/UX standards are owned exclusively by their respective modules and are out of scope here.
