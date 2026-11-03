# MAMBO-10: The state of the work item cannot be changed

## Steps to reproduce
1. Open an existing work item (e.g. one in Backlog).
2. Try to change its state (e.g. to In Progress).

## Expected
The work item moves to the selected state.

## Actual
The state remains unchanged.

## Possible causes
- Workflow transition restrictions
- Failing state-update request
- UI not persisting the selection

## Severity
Medium
